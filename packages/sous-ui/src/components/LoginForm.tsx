import React from 'react'
import { YStack, XStack, Button, Input, Text, Image, Card, Theme } from 'tamagui'

export function LoginForm({ onSubmit, loading, error }: { onSubmit: (e: any) => void, loading: boolean, error?: string }) {
  return (
    <Theme name="dark">
      <YStack f={1} jc="center" ai="center" bg="$background" padding="$4" height="100vh">
        <Card elevate size="$4" bordered animation="bouncy" width={400} scale={1} hoverStyle={{ scale: 1.02 }} pressStyle={{ scale: 0.98 }}>
          <Card.Header padded>
            <YStack ai="center" gap="$2">
              <Image 
                source={{ uri: '/logo.png', width: 48, height: 48 }}
                width={48} height={48}
              />
              <Text fontSize="$6" fontWeight="bold" color="$color">Sous Tools Admin</Text>
              <Text fontSize="$3" color="$colorFocus" textAlign="center">Sign in to manage your tenant and restaurant operations.</Text>
            </YStack>
          </Card.Header>
          <Card.Footer padded>
            <YStack width="100%" gap="$4">
              <form onSubmit={onSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <YStack gap="$2">
                  <Text fontSize="$3" color="$color">Email</Text>
                  <Input name="email" placeholder="conar@dtown.cafe" type="email" required />
                </YStack>
                <YStack gap="$2">
                  <Text fontSize="$3" color="$color">Password</Text>
                  <Input name="password" placeholder="••••••••" type="password" required />
                </YStack>
                
                {error && <Text color="$red10" fontSize="$3">{error}</Text>}

                <Button theme="active" size="$4" formAction="submit" disabled={loading}>
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>
              </form>
            </YStack>
          </Card.Footer>
        </Card>
      </YStack>
    </Theme>
  )
}
