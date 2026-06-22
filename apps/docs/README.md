# Documentation

This workspace uses [Mintlify](https://mintlify.com) instead of Next.js, following
the docs-app pattern used by next-forge.

Mintlify requires Node.js 20.17 or newer and does not support Node.js 25. This
repository pins Node.js 22 in the root `.nvmrc`.

Run the local documentation site from the repository root:

```sh
bun run dev --filter=docs
```

Check internal links with:

```sh
bun run lint --filter=docs
```

For Mintlify Cloud, configure the monorepo documentation path as `/apps/docs`.
