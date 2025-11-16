import { Platform, useColorScheme } from "react-native";

/**
 * Colors used in the app — Light & Dark modes
 */
export const Colors = {
  light: {
    text: "#330C2F",
    subText: "#8A817C",

    background: "#FBF7F4",
    card: "#FFFFFF",

    primary: "#FFA704",      // Orange
    secondary: "#FFFFFF",    // Text on orange

    accent: "#7E2A8D",       // Purple background / tint

    icon: "#330C2F",
    tint: "#7E2A8D",

    tabIconDefault: "#8A817C",
    tabIconSelected: "#FFA704",
  },

  dark: {
    text: "#ECEDEE",
    subText: "#B8B4B2",

    background: "#151718",
    card: "#1F1F1F",

    primary: "#FFA704",       // Keep the orange in dark mode also
    secondary: "#151718",

    accent: "#C77DFF",        // Light purple for dark mode

    icon: "#ECEDEE",
    tint: "#C77DFF",

    tabIconDefault: "#9BA1A6",
    tabIconSelected: "#FFA704",
  },
};

/**
 * Fonts selection
 */
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
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

/**
 * useTheme() — Returns colors based on light/dark mode
 */
export const useTheme = () => {
  const mode = useColorScheme(); // "light" | "dark"
  return Colors[mode || "light"];
};
