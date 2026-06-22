# App

Product application shell built with Next.js and the shared design system.

```sh
bun run dev --filter=app
```

The app listens on `http://localhost:3004`. Set `NEXT_PUBLIC_API_URL` when the
API is not available at the local default of `http://localhost:3003`.

Authentication is intentionally not coupled to a vendor in this initial shell.
Add an auth package and a Next.js `proxy.ts` when the product's identity provider
has been selected.
