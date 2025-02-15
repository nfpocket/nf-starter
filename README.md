# NF Starter

This is a fullstack Nuxt-Starter using:
- Drizzle
- BetterAuth
- NuxtUi

The idea is to use this project as your starting point when generating new fullstack Nuxt apps.

## Todo:
- [ ] other DB instead of SQLite because I just dont like it
- [ ] CLI to generate CRUD endpoints
- [ ] create npx command to create a new NF-App
- [ ] Generic cleanup

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

Create your own .env:

```bash
cp .env.example .env
```

Init your db:

```bash
pnpm run db:init
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
