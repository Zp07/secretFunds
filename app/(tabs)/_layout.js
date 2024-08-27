import { Tabs } from "expo-router";
import { StatsIcon, HomeIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        header: () => {},
        tabBarActiveTintColor: "",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",

          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Tabs.Screen
        name="Stats"
        options={{
          name: "stats",
          tabBarIcon: ({ color }) => <StatsIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
