import { View, Text, StyleSheet } from "react-native";
import { QrCode } from "lucide-react-native";
import { useTheme } from "../../constants/theme";

export default function Screen2() {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <QrCode size={120} color={theme.primary} />
      <Text style={[styles.title, { color: theme.text }]}>
        Share Your QR
      </Text>
      <Text style={[styles.desc, { color: theme.textSecondary }]}>
        Generate a QR code and share it with your guests.
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
