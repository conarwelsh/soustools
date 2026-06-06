#!/bin/zsh
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH"

cd apps/web
pnpm add @supabase/supabase-js @supabase/ssr
pnpm add lucide-react

cd ../api
pnpm add @supabase/supabase-js
