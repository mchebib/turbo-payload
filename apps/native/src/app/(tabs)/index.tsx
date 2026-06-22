import {
  Body,
  Button,
  Card,
  colors,
  Heading,
  Pill,
  Screen,
  SectionHeader,
  spacing,
  typography,
} from "@repo/native-design-system";
import { useRouter } from "expo-router";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useApiHealth } from "@/hooks/use-api-health";

const metrics = [
  { label: "Published", value: "24" },
  { label: "Projects", value: "03" },
  { label: "Coverage", value: "86%" },
];

export default function OverviewScreen() {
  const router = useRouter();
  const { check, refreshing, status } = useApiHealth();
  const statusTone =
    status === "online"
      ? "positive"
      : status === "offline"
        ? "negative"
        : "warning";

  return (
    <Screen>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.content}
          refreshControl={
            <RefreshControl onRefresh={check} refreshing={refreshing} />
          }
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.topbar}>
            <View style={styles.brandMark}>
              <Text style={styles.brandLetter}>N</Text>
            </View>
            <Pill status={statusTone}>API {status}</Pill>
          </View>

          <View style={styles.hero}>
            <Text style={styles.eyebrow}>Monday briefing</Text>
            <Heading>Good morning.</Heading>
            <Body muted>
              Your content platform is ready for the next release.
            </Body>
          </View>

          <View style={styles.metrics}>
            {metrics.map((metric, index) => (
              <Card key={metric.label} style={styles.metricCard}>
                <Text style={styles.metricIndex}>0{index + 1}</Text>
                <Text style={styles.metricValue}>{metric.value}</Text>
                <Body muted style={styles.metricLabel}>
                  {metric.label}
                </Body>
              </Card>
            ))}
          </View>

          <Card tone="dark" style={styles.focusCard}>
            <Text style={styles.focusEyebrow}>Current focus</Text>
            <Heading level={2} style={styles.focusHeading}>
              Shape the next release without losing the thread.
            </Heading>
            <Body style={styles.focusBody}>
              Review recent changes, then move directly into the work that needs
              attention.
            </Body>
            <Button
              onPress={() => router.push("/(tabs)/activity")}
              variant="secondary"
            >
              Review activity
            </Button>
          </Card>

          <SectionHeader eyebrow="Quick actions" title="Keep moving" />
          <View style={styles.actions}>
            <Button onPress={() => void check()}>Refresh system status</Button>
            <Button
              onPress={() => router.push("/(tabs)/activity")}
              variant="secondary"
            >
              Open activity
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.hero },
  topbar: {
    minHeight: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandMark: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: colors.ink,
  },
  brandLetter: {
    color: colors.accent,
    fontFamily: typography.display,
    fontSize: 18,
  },
  hero: {
    gap: spacing.md,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
  },
  eyebrow: {
    color: colors.inkMuted,
    fontFamily: typography.mono,
    fontSize: 10,
    letterSpacing: 1.3,
    textTransform: "uppercase",
  },
  metrics: { flexDirection: "row", gap: spacing.sm },
  metricCard: {
    minHeight: 150,
    flex: 1,
    justifyContent: "space-between",
    padding: spacing.md,
  },
  metricIndex: {
    color: colors.inkMuted,
    fontFamily: typography.mono,
    fontSize: 9,
  },
  metricValue: {
    marginTop: spacing.xl,
    color: colors.ink,
    fontFamily: typography.display,
    fontSize: 28,
    letterSpacing: -1.2,
  },
  metricLabel: { fontSize: 10 },
  focusCard: { gap: spacing.lg, marginVertical: spacing.xl },
  focusEyebrow: {
    color: colors.accent,
    fontFamily: typography.mono,
    fontSize: 10,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  focusHeading: { color: colors.inverse },
  focusBody: { color: "rgba(242, 240, 233, 0.68)" },
  actions: { gap: spacing.md, marginTop: spacing.lg },
});
