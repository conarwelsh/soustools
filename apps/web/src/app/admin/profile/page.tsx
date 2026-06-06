'use client'

import React, { useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import { ProfileForm } from '@sous/ui'
import { updatePassword } from './actions'

export default function ProfilePage() {
  const [isPending, startTransition] = useTransition()
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  const success = searchParams.get('success')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    startTransition(() => {
      updatePassword(formData)
    })
  }

  return (
    <ProfileForm 
      onSubmit={handleSubmit} 
      loading={isPending} 
      error={error ?? undefined} 
      success={success ?? undefined}
    />
  )
}
