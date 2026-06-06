'use client'

import React, { useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import { LoginForm } from '@sous/ui'
import { login } from './actions'

export default function LoginPage() {
  const [isPending, startTransition] = useTransition()
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(() => {
      login(formData)
    })
  }

  return (
    <LoginForm 
      onSubmit={handleSubmit} 
      loading={isPending} 
      error={error ?? undefined} 
    />
  )
}
