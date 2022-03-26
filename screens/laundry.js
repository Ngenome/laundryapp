import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../theme";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { BButton, FButton, IconInput, Cardy } from "../components";
import { styles, windowHeight, windowWidth } from "../styles";

import { createStackNavigator } from "@react-navigation/stack";
import WashingMachine from "../assets/washing-machine.svg";
import { useDispatch } from "react-redux";
import { changeScreen } from "../redux/actions";
import { Nunito_400Regular, useFonts } from "@expo-google-fonts/nunito";
const Stack = createStackNavigator();
const services = [
  {
    name: "Wash & Fold",
    serviceID: 1,
    image:
      "https://www.classicdrycleaner.com/content/uploads/2018/10/slide-3.jpg",
    serviceDuration: 24,
  },
  {
    name: "Dry Clean",
    serviceID: 2,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/002/736/084/small_2x/wash-machine-house-appliance-isolated-icon-free-vector.jpg",
    serviceDuration: 24,
  },
  {
    name: "Iron and Fold",
    serviceID: 3,
    image:
      "https://www.quickanddirtytips.com/sites/default/files/styles/article_main_image/public/images/8498/shutterstock_1113444539-%281%29-compressor.jpg?itok=kd8JR2sb",
    serviceDuration: 24,
  },
];
export function Laundry() {
  let [fontsLoaded] = useFonts({
    Nunito: require("../assets/Nunito/NunitoRegular.ttf"),
    Nunito_400Regular,
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useFocusEffect(() => {
    dispatch(changeScreen("Laundry"));
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient
        colors={Theme.gradientColors}
        style={{
          marginTop: 27,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            height: windowHeight / 5.6,
            width: windowWidth / 1.2,
            borderRadius: 13,
            flexDirection: "row",
            justifyContent: "space-around",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/laundry/washing-machine-main.png")}
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
      <View
        style={{
          width: windowWidth / 1.23,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontFamily: Theme.fonts.primaryFont,
            color: Theme.darkText,
          }}
        >
          Hi Josh!
        </Text>
        <View
          style={{
            marginTop: 12,
          }}
        >
          <Text
            style={{
              fontSize: 20,

              color: Theme.darkText,
              fontFamily: Theme.fonts.primaryFont,
            }}
          >
            What services do you
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: Theme.fonts.primaryFont,
              color: Theme.darkText,
            }}
          >
            need today?
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: windowHeight / 70,
          height: windowHeight / 2,
        }}
      >
        <ScrollView
          style={{
            height: "100%",
          }}
        >
          {services.map((s, i) => {
            return (
              <Cardy
                key={i}
                onPress={() => {
                  navigation.navigate("order", {
                    serviceID: s.serviceID,
                    serviceName: s.name,
                    imageSource: s.image,
                  });
                }}
                bg="white"
                title={s.name}
                source={{ uri: s.image }}
                description={s.serviceDuration}
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
