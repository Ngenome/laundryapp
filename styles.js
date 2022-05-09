import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;
import { Theme } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.defaultBG,
  },
  splitGradient: {},
  checkbox: {
    alignSelf: "center",
    borderRadius: 7.5,
    height: 15,
    width: 15,
    borderWidth: 1,
  },
  defaultInput: {
    height: windowHeight / 17,
    width: windowWidth / 1.3,
    elevation: 10,
    color: Theme.darkText,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 40,
    // borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    marginVertical: 12,
    backgroundColor: Theme.inputBackground,
  },
  fullcenter: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  lgText: {
    fontFamily: Theme.fonts.Nunito_700Bold,

    fontSize: Theme.sizes.lgText,
  },
  mdText: {
    fontFamily: Theme.fonts.primaryFont,

    fontSize: Theme.sizes.mdText + 3,
  },
  smText: {
    fontFamily: Theme.fonts.Nunito_700Bold,
    color: Theme.primary,
    fontSize: Theme.sizes.mdText + 2,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
  },
  pickerView: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const CustomBorder=()=>{
  return( border)
 
}   