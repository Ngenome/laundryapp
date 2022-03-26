import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const Theme = {
  primary: "white",
  secondary: "#2f84fa",
  text: {
    primary: "white",
    secondary: "#2f84fa",
    tertiary: "#4dc3eb",
  },
  tertiary: "#4dc3eb",
  gradientColors: ["#4658cf", "#0d1a73"],
  darkText: "#2b2b2b",
  placeholderColor: "gray",
  inputBackground: "white",
  lightDark: "gray",
  mdDark: "#575757",
  notifyIcon: "red",
  privacyIcon: "#00c71e",
  icons: {
    primary: "white",
    secondary: "#2f84fa",
    tertiary: "#222fbd",
    dark: "#1b1d38",
    light: "#edefff",
  },
  transparent: "transparent",
  fonts: {
    primaryFont: "FredokaOne_400Regular",
    secondary: "Poppins_400Regular",
  },

  primaryBG: "white",
  lightDarkBG: "#c9c9c9",
  cardBg: "#5f40cf",
  defaultBG: "#ebfcff",
  sizes: {
    orderIconSize: 27,
    lgText: windowWidth / 14,
    mdText: windowWidth / 24,
    smText: windowWidth / 29,
    xsmText: windowWidth / 39,
    lgIcon: windowWidth / 7,
    mdRadius: windowWidth / 23,
  },
};