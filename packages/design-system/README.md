# Design system

`@repo/design-system` is the preferred shared UI package for this monorepo. It
owns the Tailwind CSS v4 theme, shadcn/ui primitives, Kibo UI components, and
the `cn` utility.

## Add it to an app

Add the workspace dependency to the consuming app's `package.json`:

```json
{
  "dependencies": {
    "@repo/design-system": "*"
  }
}
```

Then run `bun install` from the repository root.

Import the shared stylesheet once in the app's root layout:

```tsx
import '@repo/design-system/globals.css'
```

The consuming app must process Tailwind CSS v4. For a Next.js app, install
`tailwindcss` and `@tailwindcss/postcss`, then add:

```js
// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

export default config
```

## Import components

Import components through package export paths rather than their source files:

```tsx
import { Card } from '@repo/design-system/components/card'
import {
  GanttHeader,
  GanttProvider,
  GanttTimeline,
} from '@repo/design-system/components/kibo-ui/gantt'
import { cn } from '@repo/design-system/lib/utils'
```

Kibo components such as Gantt are client components. They can be imported by a
client component rendered beneath a React Server Component boundary.

## Add components

Run registry commands from this package so the CLI uses its `components.json`
and writes dependencies to the correct workspace:

```sh
cd packages/design-system
bunx --bun kibo-ui add gantt
bunx --bun shadcn@latest add button
```

Use the generated export conventions:

- shadcn component: `@repo/design-system/components/<name>`
- Kibo component: `@repo/design-system/components/kibo-ui/<name>`
- utility: `@repo/design-system/lib/<name>`
- hook: `@repo/design-system/hooks/<name>`

After adding or editing a component, verify the package from the repository
root:

```sh
bun run check-types --filter=@repo/design-system
```

## Package consolidation

`packages/ui` is the original Turborepo starter library and is still consumed
by `web` and `docs`. Do not add new components there. The long-term direction is
to migrate its `Button`, `Card`, and `Code` components into this package, update
the app imports, and remove `@repo/ui` so theme and component ownership remain
in one place.
