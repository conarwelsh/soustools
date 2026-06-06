# Sous Tools

A comprehensive, multi-tenant SaaS platform for restaurant management, encompassing point-of-sale (POS), kitchen display systems (KDS), digital signage, inventory management, recipe tracking, e-commerce, and a WearOS integration.

## Architecture

This project is a Turborepo monorepo utilizing Feature-Driven Design.

### Apps
- `apps/web`: Next.js unified frontend (Marketing, Admin, POS, Signage).
- `apps/mobile`: Expo (React Native) app for iOS and Android.
- `apps/api`: NestJS backend.
- `apps/edge`: Local Raspberry Pi edge node.
- `apps/docs`: Nextra/Docusaurus documentation and living style guide.

### Core Tech Stack
- React 19 / Next.js 15
- Tamagui (Universal UI)
- Supabase (PostgreSQL, Auth, RLS)
- NestJS (Backend)
- Infisical (Secrets)
- Highlight.io (Observability)
- Upstash / Redis Cloud + BullMQ (Task Queues)
