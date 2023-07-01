import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function People() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Link href="/about" asChild>
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
