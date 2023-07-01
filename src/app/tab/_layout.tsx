import { Tabs } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="banner"
        options={{
          headerStyle: {
            marginBottom: 90,
          },
          title: "Cats",
          tabBarIcon: () => <Text>🐱</Text>,
        }}
      />
      <Tabs.Screen
        name="contato"
        options={{
          title: "Dogs",
          tabBarIcon: () => <Text>🐶</Text>,
          headerStyle: {
            marginBottom: 90,
          },
        }}
      />
      <Tabs.Screen
        name="(tabs)"
        options={{
          title: "About",
          tabBarIcon: () => <Text>🐶</Text>,
          headerStyle: {
            marginBottom: 90,
          },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
