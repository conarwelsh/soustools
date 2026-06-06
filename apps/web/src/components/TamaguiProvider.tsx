'use client'

import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { TamaguiProvider as TamaguiProviderBase } from 'tamagui'

import config from '@sous/ui/tamagui.config'

export function TamaguiProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light')

  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet()
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }} id={rnwStyle.id} />
        <style
          dangerouslySetInnerHTML={{
            __html: config.getCSS(),
          }}
        />
      </>
    )
  })

  return (
    <TamaguiProviderBase config={config} defaultTheme={theme}>
      {children}
    </TamaguiProviderBase>
  )
}
