# API

API-only Next.js application following the route-handler structure used by
next-forge.

```sh
bun run dev --filter=api
```

The service listens on `http://localhost:3005` and exposes:

- `GET /` - service metadata
- `GET /health` - liveness check
- `GET /ready` - readiness check
- `GET /v1` - versioned API root
- `GET /cron/keep-alive` - Vercel cron target

Set `CRON_SECRET` in production. Vercel sends it as a bearer token when invoking
cron routes.
