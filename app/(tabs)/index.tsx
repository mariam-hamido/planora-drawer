import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18, fontWeight: "bold" },
});