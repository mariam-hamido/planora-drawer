import { View, Text, StyleSheet } from "react-native";
import { Calendar } from "lucide-react-native";
import { useTheme } from "../../constants/theme";

export default function Screen1() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Calendar size={120} color={theme.primary} />
      <Text style={[styles.title, { color: theme.text }]}>
        Add Event Details
      </Text>
      <Text style={[styles.desc, { color: theme.textSecondary }]}>
        Easily add and customize your event details.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 20,
  },
  desc: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
});
