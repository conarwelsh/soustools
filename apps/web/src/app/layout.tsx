import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TamaguiProvider } from '@/components/TamaguiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sous Tools',
  description: 'Restaurant Management Platform',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang=" en\>
