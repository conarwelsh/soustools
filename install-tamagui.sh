#!/bin/zsh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"

# Install Tamagui in the ui package
cd packages/sous-ui
pnpm add tamagui @tamagui/config react react-dom react-native-web
pnpm add -D typescript @types/react

# Create base tamagui config
cat << 'EOF' > tamagui.config.ts
import { createTamagui } from 'tamagui'
import { config } from '@tamagui/config/v3'

const tamaguiConfig = createTamagui(config)

export type AppConfig = typeof tamaguiConfig
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig
EOF

# Install in Next.js web app
cd ../../apps/web
pnpm add tamagui @tamagui/next-plugin @tamagui/config react-native-web
pnpm add @sous/ui --workspace
