import React, { useRef, useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../../constants/theme";

import Screen1 from "./screen1";
import Screen2 from "./screen2";
import Screen3 from "./screen3";

export default function Onboarding() {
  const router = useRouter();
  const theme = useTheme();
  const flatRef = useRef<FlatList>(null);

  const screens = [<Screen1 />, <Screen2 />, <Screen3 />];
  const [index, setIndex] = useState(0);

  const goNext = () => {
    if (index < screens.length - 1) {
      flatRef.current?.scrollToIndex({ index: index + 1 });
    } else {
      router.replace("(drawer)");
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        ref={flatRef}
        data={screens}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const slideIndex = Math.round(
            e.nativeEvent.contentOffset.x /
              e.nativeEvent.layoutMeasurement.width
          );
          setIndex(slideIndex);
        }}
        renderItem={({ item }) => (
          <View style={{ width: "100%" }}>{item}</View>
        )}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {screens.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: i === index ? theme.primary : "#ccc" },
            ]}
          />
        ))}
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={[styles.nextButton, { backgroundColor: theme.primary }]}
        onPress={goNext}
      >
        <Text style={styles.nextText}>
          {index === screens.length - 1 ? "Done" : "Next"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("(drawer)")}>
        <Text style={[styles.skip, { color: theme.primary }]}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 6,
  },
  nextButton: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 10,
    alignItems: "center",
  },
  nextText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  skip: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
  },
});
