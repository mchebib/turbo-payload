# Design system

Shared shadcn/ui and Kibo UI components for the monorepo.

## Add components

Run registry commands from this package so the CLI uses the local
`components.json` aliases:

```sh
cd packages/design-system
bunx --bun kibo-ui add gantt
bunx --bun shadcn@latest add button
```

## Use Gantt

Add `@repo/design-system` as a workspace dependency of the consuming app, import
the shared Tailwind stylesheet from its root layout, and import Gantt directly:

```tsx
import '@repo/design-system/globals.css'

import {
  GanttHeader,
  GanttProvider,
  GanttTimeline,
} from '@repo/design-system/components/kibo-ui/gantt'
```

The consuming app must process Tailwind CSS v4. The component implementation is
client-side and can be rendered beneath a React Server Component boundary.
