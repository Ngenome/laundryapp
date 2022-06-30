import { View, Text } from "react-native";
import React from "react";
import { windowHeight, windowWidth } from "../../styles";

const FromToLocationView = () => {
  return (
    <View
      style={{
        width: windowWidth / 1.5,
        height: windowHeight / 6,
        borderRadius: windowWidth / 20,
        position: "absolute",
        zIndex: 10,
        top: windowHeight / 10,
        right: windowWidth / 20,
      }}
    ></View>
  );
};

export default FromToLocationView;
