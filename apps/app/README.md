# App

Product application shell built with Next.js and the shared design system.

```sh
bun run dev --filter=app
```

The app listens on `http://localhost:3004`. Set `NEXT_PUBLIC_API_URL` when the
API is not available at the local default of `http://localhost:3005`.

Authentication is provided by Clerk through the shared `@repo/auth` package.
Protected routes are enforced in `apps/app/proxy.ts`, and the app exposes
Clerk-hosted UI at:

- `/sign-in`
- `/sign-up`

Required local environment:

```env
NEXT_PUBLIC_API_URL=http://localhost:3005
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

Use `@repo/auth/provider` for client/provider components and
`@repo/auth/server` for server-side auth helpers.
