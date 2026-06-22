import type { PropsWithChildren, ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  type TextStyle,
  View,
  type ViewStyle,
} from "react-native";

import { colors, radii, spacing, typography } from "./tokens";

type StyleProp<T> = T | T[] | false | null | undefined;

export function Screen({
  children,
  style,
}: PropsWithChildren<{ style?: StyleProp<ViewStyle> }>) {
  return <View style={[styles.screen, style]}>{children}</View>;
}

export function Card({
  children,
  tone = "default",
  style,
}: PropsWithChildren<{
  tone?: "default" | "dark" | "accent";
  style?: StyleProp<ViewStyle>;
}>) {
  return (
    <View
      style={[
        styles.card,
        tone === "dark" && styles.cardDark,
        tone === "accent" && styles.cardAccent,
        style,
      ]}
    >
      {children}
    </View>
  );
}

export function Pill({
  children,
  status,
}: PropsWithChildren<{ status?: "positive" | "warning" | "negative" }>) {
  return (
    <View style={styles.pill}>
      {status ? (
        <View style={[styles.pillDot, { backgroundColor: colors[status] }]} />
      ) : null}
      <Text style={styles.pillText}>{children}</Text>
    </View>
  );
}

export function Button({
  children,
  icon,
  loading = false,
  onPress,
  variant = "primary",
}: {
  children: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const inverse = variant === "primary";

  return (
    <Pressable
      accessibilityRole="button"
      disabled={loading}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        variant === "secondary" && styles.buttonSecondary,
        variant === "ghost" && styles.buttonGhost,
        pressed && styles.buttonPressed,
        loading && styles.buttonDisabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={inverse ? colors.inverse : colors.ink} />
      ) : (
        <>
          <Text
            style={[styles.buttonLabel, inverse && styles.buttonLabelInverse]}
          >
            {children}
          </Text>
          {icon}
        </>
      )}
    </Pressable>
  );
}

export function Heading({
  children,
  level = 1,
  style,
}: PropsWithChildren<{ level?: 1 | 2 | 3; style?: StyleProp<TextStyle> }>) {
  return (
    <Text
      accessibilityRole="header"
      style={[
        styles.heading,
        level === 1 && styles.headingOne,
        level === 2 && styles.headingTwo,
        level === 3 && styles.headingThree,
        style,
      ]}
    >
      {children}
    </Text>
  );
}

export function Body({
  children,
  muted = false,
  style,
}: PropsWithChildren<{ muted?: boolean; style?: StyleProp<TextStyle> }>) {
  return (
    <Text style={[styles.body, muted && styles.bodyMuted, style]}>
      {children}
    </Text>
  );
}

export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <View style={styles.sectionHeader}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Heading level={2}>{title}</Heading>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.canvas },
  card: {
    padding: spacing.xl,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    borderRadius: radii.lg,
    backgroundColor: colors.surface,
  },
  cardDark: {
    borderColor: colors.surfaceStrong,
    backgroundColor: colors.surfaceStrong,
  },
  cardAccent: {
    borderColor: colors.accentSoft,
    backgroundColor: colors.accentSoft,
  },
  pill: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: 7,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    borderRadius: radii.pill,
    backgroundColor: colors.surface,
  },
  pillDot: { width: 7, height: 7, borderRadius: radii.pill },
  pillText: {
    color: colors.ink,
    fontFamily: typography.body,
    fontSize: 11,
    fontWeight: "600",
    textTransform: "capitalize",
  },
  button: {
    minHeight: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    borderColor: colors.surfaceStrong,
    borderRadius: radii.md,
    backgroundColor: colors.surfaceStrong,
  },
  buttonSecondary: { backgroundColor: "transparent" },
  buttonGhost: {
    minHeight: 40,
    borderColor: "transparent",
    backgroundColor: "transparent",
  },
  buttonPressed: { opacity: 0.72, transform: [{ scale: 0.985 }] },
  buttonDisabled: { opacity: 0.55 },
  buttonLabel: {
    color: colors.ink,
    fontFamily: typography.body,
    fontSize: 14,
    fontWeight: "700",
  },
  buttonLabelInverse: { color: colors.inverse },
  heading: {
    color: colors.ink,
    fontFamily: typography.display,
    fontWeight: "400",
  },
  headingOne: { fontSize: 48, lineHeight: 50, letterSpacing: -2.4 },
  headingTwo: { fontSize: 28, lineHeight: 32, letterSpacing: -1.1 },
  headingThree: { fontSize: 20, lineHeight: 24, letterSpacing: -0.5 },
  body: {
    color: colors.ink,
    fontFamily: typography.body,
    fontSize: 15,
    lineHeight: 23,
  },
  bodyMuted: { color: colors.inkMuted },
  sectionHeader: { gap: spacing.sm },
  eyebrow: {
    color: colors.inkMuted,
    fontFamily: typography.mono,
    fontSize: 10,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
});
