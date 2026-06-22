import { colors, typography } from "@repo/native-design-system";
import { Tabs } from "expo-router";
import { type ColorValue, Text } from "react-native";

function TabIcon({ label, color }: { label: string; color: ColorValue }) {
  return (
    <Text
      style={{
        color,
        fontFamily: typography.mono,
        fontSize: 12,
        fontWeight: "700",
      }}
    >
      {label}
    </Text>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: colors.canvas },
        tabBarActiveTintColor: colors.ink,
        tabBarInactiveTintColor: colors.inkMuted,
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
        tabBarStyle: {
          height: 82,
          paddingTop: 8,
          borderTopColor: colors.border,
          backgroundColor: colors.surface,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Overview",
          tabBarIcon: ({ color }) => <TabIcon color={color} label="01" />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color }) => <TabIcon color={color} label="02" />,
        }}
      />
    </Tabs>
  );
}
