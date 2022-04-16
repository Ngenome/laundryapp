import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Checkbox from "expo-checkbox";

import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../theme";
import AppLoading from "expo-app-loading";
import { useState } from "react";
import { BButton, FButton, IconInput } from "../components";
import { styles, windowHeight, windowWidth } from "../styles";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [remember, setRemember] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={Theme.gradientColors}
        style={styles.splitGradient}
      >
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            height: windowHeight / 3.2,
            width: windowWidth,
          }}
        >
          <Text
            style={{
              color: Theme.primary,
              fontSize: 14,
              fontFamily: Theme.fonts.nunito,
              marginBottom: 15,
            }}
          >
            Welcome Here!!
          </Text>
          <Text
            style={{
              color: Theme.primary,
              fontSize: 37,
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              marginBottom: 45,
            }}
          >
            Register
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FButton
              title="LOGIN"
              family={Theme.fonts.Nunito_600SemiBold}
              fontSize={windowWidth / 24}
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
            <FButton
              family={Theme.fonts.Nunito_600SemiBold}
              title="SIGN UP"
              fontSize={windowWidth / 24}
              bg
              bgColor={Theme.tertiary}
            />
          </View>
        </View>
      </LinearGradient>
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            marginTop: 36,
          }}
        >
          <IconInput
            fontFamily={Theme.fonts.nunito}
            name="user"
            family="fontawesome"
            iconSize={windowWidth / 15}
            placeholder="Full name"
          />
          <IconInput
            fontFamily={Theme.fonts.nunito}
            name="phone"
            family="feather"
            iconSize={windowWidth / 15}
            placeholder="Mobile/phone number"
          />
          <IconInput
            fontFamily={Theme.fonts.nunito}
            name="lock"
            iconColor="red"
            family="materialicons"
            iconSize={windowWidth / 15}
            placeholder="Type your Password"
          />
          <IconInput
            fontFamily={Theme.fonts.nunito}
            name="lock"
            iconColor="red"
            family="materialicons"
            iconSize={windowWidth / 15}
            placeholder="Confirm your Password"
          />
          <IconInput
            fontFamily={Theme.fonts.nunito}
            name="location-pin"
            iconColor="red"
            family="Entypo"
            iconSize={windowWidth / 15}
            placeholder="Select Location"
          />
        </View>

        <BButton
          onPress={() => {
            navigation.navigate("Home");
          }}
          family={Theme.fonts.Nunito_600SemiBold}
          title="SIGN UP"
          bg
          bgColor={Theme.tertiary}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: windowWidth,
          justifyContent: "center",
          position: "relative",
          alignSelf: "baseline",
        }}
      >
        <Text
          style={{
            color: Theme.darkText,
            fontSize: 15,
            fontFamily: Theme.fonts.nunito,
          }}
        >
          Have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: Theme.fonts.nunito,
              color: Theme.tertiary,
              marginLeft: 2,
              marginBottom: 30,
            }}
          >
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
