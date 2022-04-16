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
import Carousel from "./carousel";
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
      <View
        style={{
          height: windowHeight / 5,
        }}
      >
        <Carousel />
      </View>

      <View
        style={{
          width: windowWidth / 1.23,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontFamily: Theme.fonts.nunito,
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
              fontSize: 18,

              color: Theme.darkText,
              fontFamily: Theme.fonts.Nunito_600SemiBold,
            }}
          >
            What services do you
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: Theme.fonts.Nunito_600SemiBold,
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
                fontFamily={Theme.fonts.Nunito_600SemiBold}
                cost={34 * ((i + 1) / 2)}
                s
              />
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
