import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/theme";
import { useRouter } from "expo-router";

export default function Onboarding() {
  const scheme = useColorScheme() ?? "light";
  const color = Colors[scheme];
  const router = useRouter();
  const [step, setStep] = useState(0);

  const slides = [
    {
      title: "Add Event Details",
      desc: "Easily add and customize your event details in a fast, organized way.",
      img: require("../assets/onboarding/step1.png"),
    },
    {
      title: "Share Your QR",
      desc: "Generate and share your event QR instantly with guests.",
      img: require("../assets/onboarding/step2.png"),
    },
    {
      title: "Enjoy & Give Feedback",
      desc: "Let your guests enjoy a smooth experience and receive their feedback.",
      img: require("../assets/onboarding/step3.png"),
    },
  ];

  function next() {
    if (step < 2) setStep(step + 1);
    else router.replace("/"); // بعد آخر شاشة يدخل Home
  }

  return (
    <View style={[styles.container, { backgroundColor: color.background }]}>
      {/* Skip */}
      <TouchableOpacity onPress={() => router.replace("/")}>
        <Text style={[styles.skip, { color: color.subText }]}>Skip</Text>
      </TouchableOpacity>

      {/* Image */}
      <Image source={slides[step].img} style={styles.image} resizeMode="contain" />

      {/* Title */}
      <Text style={[styles.title, { color: color.text }]}>
        {slides[step].title}
      </Text>

      {/* Description */}
      <Text style={[styles.desc, { color: color.subText }]}>
        {slides[step].desc}
      </Text>

      {/* Indicators */}
      <View style={styles.dots}>
        {[0, 1, 2].map((i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor: step === i ? color.primary : "#ccc",
              },
            ]}
          />
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: color.primary }]}
        onPress={next}
      >
        <Text style={[styles.btnText, { color: color.secondary }]}>
          {step === 2 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  skip: { textAlign: "right", marginBottom: 20, fontSize: 15 },
  image: { width: "100%", height: 220, alignSelf: "center", marginBottom: 40 },
  title: { fontSize: 28, fontWeight: "700", textAlign: "center", marginBottom: 12 },
  desc: { fontSize: 16, textAlign: "center", lineHeight: 22, paddingHorizontal: 20, marginBottom: 30 },
  dots: { flexDirection: "row", justifyContent: "center", marginBottom: 30 },
  dot: { width: 10, height: 10, borderRadius: 10, marginHorizontal: 5 },
  btn: { paddingVertical: 14, borderRadius: 10, width: "90%", alignSelf: "center" },
  btnText: { fontSize: 18, textAlign: "center", fontWeight: "600" },
});
