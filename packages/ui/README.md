# UI

`@repo/ui` is the original Turborepo starter component package. It currently
exports `Button`, `Card`, and `Code`, and remains in the repository because the
`web` and `docs` apps still depend on it.

Import an existing component through its package subpath:

```tsx
import { Button } from '@repo/ui/button'
import { Card } from '@repo/ui/card'
import { Code } from '@repo/ui/code'
```

## Direction

Treat this package as legacy. New shared components belong in
`@repo/design-system`, which owns the Tailwind theme, shadcn/ui configuration,
Kibo UI components, and shared utilities. Migrate these starter components and
their consumers to `@repo/design-system`, then remove this package to avoid two
competing shared UI libraries.
