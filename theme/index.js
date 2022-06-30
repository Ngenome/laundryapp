import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "./colors";

const getTheme = async () => {
  try {
    const appTheme = await AsyncStorage.getItem("appTheme");
    if (appTheme !== null) {
      return appTheme;
    }
  } catch (e) {
    return null;
    console.log(null);
  }
};
var nt = getTheme();
console.log(nt);
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const Theme = {
  primary: "#16034F",
  secondary: "#ad00ff",
  foreground: "black",

  foregroundOnColoredViews: "white",
  text: {
    primary: "white",
    secondary: "#2f84fa",
    tertiary: "#4dc3eb",
  },
  tertiary: "#4dc3eb",
  gradientColors: ["#16034F", "#009dff"],
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
    bellIconBG: "white",
    gradient: ["cyan", "#0f0a69"],
    success: "#119905",
    danger: "red",
  },
  alert: "red",
  transparent: "transparent",
  fonts: {
    primaryFont: "FredokaOne_400Regular",
    secondary: "Poppins_400Regular",
    nunito: "Nunito_400Regular",
    Nunito_600SemiBold: "Nunito_600SemiBold",
    Nunito_700Bold: "Nunito_700Bold",
    Nunito_800ExtraBold: "Nunito_800ExtraBold",
  },
  primaryBG: "white",
  lightDarkBG: "#c9c9c9",
  backgrounds: {
    primaryBG: "white",
    lightDarkBG: "#c9c9c9",
    secondary: "#ffcff9",
    darkBlue: "#0e0f30",
  },

  cardBg: "#5f40cf",
  defaultBG: "#e3fbff",
  sizes: {
    orderIconSize: 27,
    lgText: windowWidth / 14,
    mdText: windowWidth / 24,
    smText: windowWidth / 29,
    xsmText: windowWidth / 39,
    lgIcon: windowWidth / 7,
    mdRadius: windowWidth / 23,
  },
  colors: {
    activeColor: "#4287f5",
    inactiveColor: "white",
    activeBorderColor: "gray",
    inactiveBorderColor: "#4287f5",
    errorColor: "red",
    mainTextColor: "#02204d",
  },
};
export default {
  Colors: colors,
};
