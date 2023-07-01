import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
      <Text style={styles.title}>Home page</Text>
        <Link href="/testemunial" asChild>
          <Text style={styles.title}>Contato</Text>
        </Link>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
