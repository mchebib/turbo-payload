# Studio

Prisma Studio workspace for inspecting the shared database.

```sh
bun run dev --filter=studio
```

The service opens Prisma Studio on `http://localhost:3006` without launching a
browser. It runs Prisma from `packages/database`, so provide the same
`DATABASE_URL` used by Payload and the database package.
