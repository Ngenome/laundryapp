const tintColorLight = "#2f95dc";
const tintColorDark = "#12ccff";

export default {
  common: {
    translucentBackground: "rgba(0, 18, 41, 0.55)",
    tint: "#5e02f2",
    text: {
      foreground: "#ffffff",
    },
  },
  light: {
    text: "#000",
    lightTint: "rgba(245, 39, 145, 0.28)",
    absoluteBackground: "#fff",
    light: "#c7c7c7",
    foreground: "#fff",
    viewBackground: "#ebf9ff",
    mediumDark: "#7d7d7d",
    background: "#f0f0f0",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    danger: "red",
    success: "#08d134",
  },
  dark: {
    text: "#fff",
    foreground: "#fff",
    lightTint: "rgba(245, 39, 145, 0.28)",
    absoluteBackground: "#000",
    light: "#6e6e6e",
    mediumDark: "#7d7d7d",
    viewBackground: "#262626",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    danger: "red",
    success: "#08d134",
  },
};
