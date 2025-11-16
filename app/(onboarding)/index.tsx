import React, { useRef, useState } from "react";
import { View, FlatList, StyleSheet, TouchableOpacity, Text, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { useTheme } from "../../constants/theme";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function Onboarding() {
  const router = useRouter();
  const theme = useTheme();

  const screens = [
    {
      title: "Add Event Details",
      desc: "Easily add and customize your event details.",
      icon: "calendar-outline",
    },
    {
      title: "Share Your QR",
      desc: "Generate a QR code and share it.",
      icon: "qr-code-outline",
    },
    {
      title: "Enjoy & Feedback",
      desc: "Let guests scan the QR and react instantly.",
      icon: "chatbubble-ellipses-outline",
    },
  ];

  const flatRef = useRef<FlatList>(null);
  const [index, setIndex] = useState(0);

  const goNext = () => {
    if (index < screens.length - 1) {
      flatRef.current?.scrollToIndex({ index: index + 1 });
      setIndex(index + 1);
    } else {
      router.replace("/(drawer)/about");
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
        renderItem={({ item }) => (
          <View style={[styles.page, { width }]}>
            <Ionicons name={item.icon} size={80} color={theme.primary} />
            <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
            <Text style={[styles.desc, { color: theme.textSecondary }]}>{item.desc}</Text>
          </View>
        )}
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
          setIndex(newIndex);
        }}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {screens.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor: index === i ? theme.primary : theme.textSecondary,
                width: index === i ? 22 : 8,
              },
            ]}
          />
        ))}
      </View>

      {/* Next Button */}
      <TouchableOpacity style={[styles.btn, { backgroundColor: theme.primary }]} onPress={goNext}>
        <Text style={styles.btnText}>{index === screens.length - 1 ? "Done" : "Next"}</Text>
      </TouchableOpacity>

      {/* Skip */}
      <TouchableOpacity onPress={() => router.replace("/(drawer)/about")}>
        <Text style={[styles.skip, { color: theme.textSecondary }]}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" },
  page: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: 30,
},
  title: { fontSize: 24, fontWeight: "700", marginTop: 20 },
  desc: { fontSize: 14, marginTop: 10, textAlign: "center" },
  dotsContainer: { flexDirection: "row", justifyContent: "center", marginVertical: 20 },
  dot: { height: 8, borderRadius: 5, marginHorizontal: 4 },
  btn: { padding: 15, marginHorizontal: 20, borderRadius: 10, alignItems: "center" },
  btnText: { color: "white", fontWeight: "600", fontSize: 16 },
  skip: { textAlign: "center", marginTop: 10, fontSize: 14 },
});
