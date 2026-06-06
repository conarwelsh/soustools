import type { NextConfig } from "next";
import { withTamagui } from "@tamagui/next-plugin";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ['@sous/ui'],
};

const tamaguiPlugin = withTamagui({
  config: '../../packages/sous-ui/tamagui.config.ts',
  components: ['tamagui'],
  outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
  disableExtraction: process.env.NODE_ENV === 'development',
});

export default tamaguiPlugin(nextConfig);
