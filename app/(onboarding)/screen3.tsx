import { View, Text, StyleSheet } from "react-native";
import { MessageSquare } from "lucide-react-native";
import { useTheme } from "../../constants/theme";

export default function Screen3() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <MessageSquare size={120} color={theme.primary} />
      <Text style={[styles.title, { color: theme.text }]}>
        Enjoy & Feedback
      </Text>
      <Text style={[styles.desc, { color: theme.textSecondary }]}>
        Let users scan and give feedback instantly.
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
