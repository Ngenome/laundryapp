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

import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { BButton, FButton, IconInput } from "../../components";
import { styles, windowHeight, windowWidth } from "../../styles";

import { createStackNavigator } from "@react-navigation/stack";
import WashingMachine from "../../assets/washing-machine.svg";
import { useDispatch } from "react-redux";
import { changeScreen } from "../../redux/actions";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import MapView, { Circle, Marker, Callout } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Theme } from "../../theme";
const Stack = createStackNavigator();

export function ShopLandingScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useFocusEffect(() => {
    dispatch(changeScreen("Edit Address"));
  });
  return (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
        flex: 1,
        marginTop: windowHeight / 16,
      }}
    >
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.primaryFont,
            color: Theme.darkText,
            fontSize: windowWidth / 15,
          }}
        >
          Shop with
        </Text>
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.darkText,
            fontSize: windowWidth / 13,
          }}
        >
          Ribrad
        </Text>
      </View>
      <Image
        source={{
          uri: "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/12/11/17/xmasjumperscomposite111219a.jpg?width=1200&width=1200&auto=webp&quality=75",
        }}
        style={{
          width: windowWidth / 1.13,
          height: windowHeight / 5,
          marginTop: windowHeight / 15,
        }}
      />
      <View
        style={{
          alignItems: "center",
          marginTop: windowHeight / 33,
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.mdDark,
            fontSize: windowWidth / 17,
          }}
        >
          Find the best Laundry style for you
        </Text>

        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.mdDark,
            fontSize: windowWidth / 27,
            marginTop: windowHeight / 14,
            textAlign: "center",
            width: windowWidth / 1.3,
          }}
        >
          A platform where you can buy the best clothes you want affordably
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: windowHeight / 13,
          width: windowWidth / 1.15,
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: windowHeight / 4,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              color: Theme.mdDark,
              fontSize: windowWidth / 27,

              textAlign: "center",
            }}
          >
            Back
          </Text>
        </TouchableOpacity>
        <BButton
          onPress={() => {
            navigation.navigate("shop_home");
          }}
          title="Start shopping"
          bg
          bgColor={Theme.secondary}
          family={Theme.fonts.primaryFont}
        />
      </View>
    </View>
  );
}

// AIzaSyBrCRMGJ1e-qxRY7bz5pSSzucfAWMZamws
