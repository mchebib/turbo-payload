# auth

Shared Clerk authentication package for the product app.

## Exports

```tsx
import { ClerkProvider, UserButton } from "@repo/auth/provider";
import { SignIn, SignUp } from "@repo/auth/components";
import { auth, currentUser, clerkMiddleware } from "@repo/auth/server";
```

Use `@repo/auth/provider` in layouts and client-facing account UI,
`@repo/auth/components` for Clerk sign-in/sign-up screens, and
`@repo/auth/server` in server components, route handlers, and `proxy.ts`.

## Environment

The consuming app must provide:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```
