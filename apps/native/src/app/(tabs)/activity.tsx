import {
  Body,
  Card,
  colors,
  Heading,
  Pill,
  Screen,
  spacing,
  typography,
} from "@repo/native-design-system";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const activity = [
  ["Landing page updated", "Payload CMS", "18 min"],
  ["API health check passed", "Production", "42 min"],
  ["Documentation published", "Mintlify", "2 hr"],
  ["Native workspace created", "Expo", "Today"],
] as const;

export default function ActivityScreen() {
  return (
    <Screen>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <Pill status="positive">Live timeline</Pill>
          <View style={styles.heading}>
            <Heading>Activity.</Heading>
            <Body muted>
              A quiet record of what changed across the workspace.
            </Body>
          </View>
          <Card style={styles.timeline}>
            {activity.map(([title, detail, time], index) => (
              <View
                key={title}
                style={[
                  styles.row,
                  index === activity.length - 1 && styles.lastRow,
                ]}
              >
                <View style={styles.marker} />
                <View style={styles.copy}>
                  <Text style={styles.title}>{title}</Text>
                  <Body muted style={styles.detail}>
                    {detail}
                  </Body>
                </View>
                <Text style={styles.time}>{time}</Text>
              </View>
            ))}
          </Card>
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xl,
    paddingBottom: spacing.hero,
  },
  heading: { gap: spacing.md, paddingVertical: spacing.xxl },
  timeline: { paddingVertical: 0 },
  row: {
    minHeight: 86,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  lastRow: { borderBottomWidth: 0 },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.positive,
  },
  copy: { flex: 1, gap: 3 },
  title: {
    color: colors.ink,
    fontFamily: typography.body,
    fontSize: 13,
    fontWeight: "700",
  },
  detail: { fontSize: 11 },
  time: { color: colors.inkMuted, fontFamily: typography.mono, fontSize: 10 },
});
