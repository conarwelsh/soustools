'use client'

import { AdminLayout } from '@sous/ui'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'

export function AdminLayoutClient({ children, userEmail }: { children: React.ReactNode, userEmail: string }) {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <AdminLayout 
      userEmail={userEmail} 
      onLogout={handleLogout} 
      onNavigate={(path) => router.push(path)}
    >
      {children}
    </AdminLayout>
  )
}
