# NF Starter

This is a fullstack Nuxt-Starter using:
- Drizzle
- BetterAuth
- NuxtUi

The idea is to use this project as your starting point when generating new fullstack Nuxt apps.

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

Create your own .env:

```bash
cp .env.example .env
```

Generate your db:

```bash
pnpm run db:generate
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
