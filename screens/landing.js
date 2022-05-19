import { Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Text, View, SafeAreaView, Image, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { BButton } from "../components";
import { styles, windowHeight, windowWidth } from "../styles";
import { Theme } from "../theme";

export default function LandingScreen() {
  const auth = useSelector((state) => state.auth);
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient
        colors={Theme.gradientColors}
        style={{
          flex: 1,
          width: windowWidth,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: windowHeight / 1.2,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: windowWidth,
              // marginBottom: windowHeight / 20,
              marginTop: windowHeight / 60,
              marginLeft: windowWidth / 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("drawer_modal");
              }}
            >
              <Feather
                color={Theme.primary}
                size={windowWidth / 14}
                name="menu"
              />
            </TouchableOpacity>
            <View></View>
          </View>
          <Text
            style={[
              styles.lgText,
              {
                color: Theme.primary,
              },
            ]}
          >
            Welcome to Ribrad
          </Text>
          <View style={{}}>
            <Image
              source={
                require("../assets/laundry/landing.png")
                //   {
                //   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6wWai_dfyM_Z_PC1zLAeXHnff_24ZfJY9XA&usqp=CAU",
                // }
              }
              style={{
                height: windowHeight / 2,
                resizeMode: "contain",
              }}
            />
          </View>
          <Text
            style={[
              {
                color: Theme.primary,
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                fontSize: windowWidth / 23,
                textAlign: "center",
              },
            ]}
          >
            Professional laundry service for all your clothes
          </Text>
          <Text
            style={[
              {
                color: Theme.primary,
                fontSize: windowWidth / 30,
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                textAlign: "center",
                width: windowWidth / 1.3,
                marginTop: windowHeight / 30,
              },
            ]}
          >
            Our services prioritize your satisfaction, your satisfaction is our
            priority
          </Text>
          <View></View>
          <View
            style={{
              marginTop: windowHeight / 60,
            }}
          >
            <BButton
              onPress={() => {
                navigation.navigate("Home");
              }}
              title="LAUNDRY"
              bg
              bgColor={Theme.secondary}
              family={Theme.fonts.Nunito_700Bold}
            />
            <BButton
              onPress={() => {
                navigation.navigate("shop");
              }}
              title="SHOP"
              bg
              bgColor={Theme.secondary}
              family={Theme.fonts.Nunito_700Bold}
            />
            {auth.loggedIn === false ? (
              <BButton
                onPress={() => {
                  navigation.navigate("signup");
                }}
                title="SIGN UP / LOGIN"
                bg
                bgColor={Theme.secondary}
                family={Theme.fonts.Nunito_700Bold}
              />
            ) : (
              <></>
            )}
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
