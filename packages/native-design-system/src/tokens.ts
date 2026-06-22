export const colors = {
  canvas: "#ECE9DF",
  surface: "#F6F4ED",
  surfaceStrong: "#17241D",
  ink: "#17241D",
  inkMuted: "#657068",
  inverse: "#F2F0E9",
  accent: "#C7FF47",
  accentSoft: "#E1F8A9",
  positive: "#4D7C5B",
  warning: "#B88A20",
  negative: "#A54737",
  border: "rgba(23, 36, 29, 0.14)",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  hero: 48,
} as const;

export const radii = { sm: 8, md: 12, lg: 18, pill: 999 } as const;

export const typography = {
  display: "Georgia",
  body: "System",
  mono: "Courier",
} as const;
