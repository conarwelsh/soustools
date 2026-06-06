import React from 'react'
import { YStack, XStack, Text, Button, Theme, Separator } from 'tamagui'
import { Settings, LogOut, Home } from 'lucide-react'

export function AdminLayout({ children, userEmail, onLogout, onNavigate }: { children: React.ReactNode, userEmail: string, onLogout: () => void, onNavigate: (path: string) => void }) {
  return (
    <Theme name=" dark\>
