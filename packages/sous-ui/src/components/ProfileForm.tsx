import React from 'react'
import { YStack, Card, Text, Input, Button, Theme } from 'tamagui'

export function ProfileForm({ onSubmit, loading, error, success }: { onSubmit: (e: any) => void, loading: boolean, error?: string, success?: string }) {
  return (
    <Theme name="dark">
      <YStack f={1} jc="flex-start" ai="center" padding="$4">
        <Card elevate size="$4" bordered width={500}>
          <Card.Header padded>
            <Text fontSize="$6" fontWeight="bold" color="$color">Profile Settings</Text>
            <Text fontSize="$3" color="$colorFocus">Update your security settings.</Text>
          </Card.Header>
          <Card.Footer padded>
            <YStack width="100%">
              <form onSubmit={onSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <YStack gap="$2">
                  <Text fontSize="$3" color="$color">New Password</Text>
                  <Input name="password" type="password" required />
                </YStack>
                <YStack gap="$2">
                  <Text fontSize="$3" color="$color">Confirm New Password</Text>
                  <Input name="confirmPassword" type="password" required />
                </YStack>

                {error && <Text color="$red10" fontSize="$3">{error}</Text>}
                {success && <Text color="$green10" fontSize="$3">{success}</Text>}

                <Button theme="active" size="$4" formAction="submit" disabled={loading} marginTop="$4">
                  {loading ? 'Updating...' : 'Update Password'}
                </Button>
              </form>
            </YStack>
          </Card.Footer>
        </Card>
      </YStack>
    </Theme>
  )
}
