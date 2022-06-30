import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, memo, useRef, useState } from "react";
import {
  FlatList,
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { FButton } from "../components";
import { Theme } from "../theme";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const slideList = [{ key: 1, image: "", title: "Hello" }];

function Slide({ data }) {
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: data.image }}
        style={{ width: windowWidth * 0.9, height: windowHeight * 0.9 }}
      ></Image>
      <Text style={{ fontSize: 24 }}>{data.title}</Text>
      <Text style={{ fontSize: 18 }}>{data.subtitle}</Text>
    </View>
  );
}

export default function Carousel() {
  console.log(slideList);
  return (
    <FlatList
      horizontal
      data={slideList}
      contentContainerStyle={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
      style={{ width: windowWidth / 1.2 }}
      renderItem={({ item }) => {
        return (
          <View>
            <LinearGradient
              colors={Theme.gradientColors}
              style={{
                marginTop: 27,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  height: windowHeight / 5.7,
                  width: windowWidth / 1.2,
                  borderRadius: 13,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require(" ../../assets/laundry/washing-machine-main.png")}
                  style={{
                    height: windowHeight / 6,
                    width: windowHeight / 6,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "VarelaRound_400Regular",
                      color: Theme.primary,
                    }}
                  >
                    15% off
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: "Rubik_300Light",
                      color: Theme.primary,
                    }}
                  >
                    All services
                  </Text>
                  <FButton
                    title="Grab IT"
                    mH={1}
                    bg
                    bgColor={Theme.primary}
                    color="black"
                    radius={7}
                    fontSize={16}
                  />
                </View>
              </View>
            </LinearGradient>
          </View>
        );
      }}
    />
  );
}
