-- Create Tenant Table
CREATE TABLE public.tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS on Tenants
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;

-- Tenants can only be viewed by users who belong to them
CREATE POLICY "Users can view their own tenant"
    ON public.tenants FOR SELECT
    USING (id IN (
        SELECT tenant_id FROM public.users WHERE user_id = auth.uid()
    ));

-- Create Users Table (extends Supabase Auth)
CREATE TABLE public.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    tenant_id UUID NOT NULL REFERENCES public.tenants(id) ON DELETE CASCADE,
    role TEXT NOT NULL DEFAULT 'member',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(user_id, tenant_id)
);

-- Enable RLS on Users
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Users can only view other users in their tenant
CREATE POLICY "Users can view members of their tenant"
    ON public.users FOR SELECT
    USING (tenant_id IN (
        SELECT tenant_id FROM public.users WHERE user_id = auth.uid()
    ));

-- Create a function to automatically inject the tenant_id into the JWT
-- This allows us to use auth.jwt()->>'tenant_id' in policies instead of slow subqueries in the future
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert into public.users if metadata is provided
  IF new.raw_user_meta_data->>'tenant_id' IS NOT NULL THEN
    INSERT INTO public.users (user_id, tenant_id, role)
    VALUES (new.id, (new.raw_user_meta_data->>'tenant_id')::uuid, 'admin');
  END IF;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
