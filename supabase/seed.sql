-- Insert Dtown Cafe Tenant
INSERT INTO public.tenants (id, name) 
VALUES ('00000000-0000-0000-0000-000000000000', 'Dtown Cafe');

-- Insert Super Admin into auth.users
INSERT INTO auth.users (
    id,
    instance_id,
    email,
    encrypted_password,
    email_confirmed_at,
    raw_app_meta_data,
    raw_user_meta_data,
    aud,
    role,
    created_at,
    updated_at
)
VALUES (
    '11111111-1111-1111-1111-111111111111',
    '00000000-0000-0000-0000-000000000000',
    'conar@dtown.cafe',
    crypt('password', gen_salt('bf')),
    NOW(),
    '{"provider":"email","providers":["email"]}',
    '{"tenant_id":"00000000-0000-0000-0000-000000000000"}',
    'authenticated',
    'authenticated',
    NOW(),
    NOW()
);

-- Insert Super Admin into public.users
INSERT INTO public.users (user_id, tenant_id, role)
VALUES ('11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000000', 'super_admin');
