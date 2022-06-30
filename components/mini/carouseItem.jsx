import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  useColorScheme,
} from "react-native";
import { windowHeight, windowWidth } from "../../styles";
import theme, { Theme } from "../../theme";
import ShoppingSvg from "../../assets/laundry/svgs/shopping.svg";
import appearance from "../../screens/constants/appearance";
import colors from "../../theme/colors";
export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const CarouselCardItem = ({ item, index }) => {
  // const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: windowHeight / 5.5,
        backgroundColor: theme.Colors[appearance].background,
        width: windowWidth / 1.2,
      }}
      key={index}
    >
      <View
        style={{
          width: windowWidth / 3,
          height: windowHeight / 6,
        }}
      >
        <ShoppingSvg height={windowHeight / 6} />
      </View>
      <View
        style={{
          width: windowWidth / 3,
          height: windowHeight / 6,
          alignItems: "center",

          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_700Bold,
            fontSize: windowWidth / 30,
            color: colors[appearance].tint,
          }}
        >
          30% shopping discount
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: windowHeight / 5,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default CarouselCardItem;
