import { Platform, useColorScheme } from "react-native";

export const Colors = {
  light: {
    text: "#11181C",
    textSecondary: "#8A817C",
    background: "#FBF7F4",
    card: "#FFFFFF",
    primary: "#FFA704",
    secondary: "#330C2F",
    icon: "#330C2F",
  },

  dark: {
    text: "#ECEDEE",
    textSecondary: "#C0C0C0",
    background: "#151718",
    card: "#1E1F20",
    primary: "#FFA704",
    secondary: "#E6D8CF",
    icon: "#FFA704",
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

export const useTheme = () => {
  const mode = useColorScheme() || "light"; // "light" | "dark"
  return Colors[mode];
};
