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
              fontSize: 17,
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Welcome Here!!
          </Text>
          <Text
            style={{
              color: Theme.primary,
              fontSize: 45,
              fontWeight: "bold",
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
            <FButton title="LOGIN" />
            <FButton title="SIGN UP" bg bgColor={Theme.tertiary} />
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
          <IconInput placeholder="Full name" />
          <IconInput placeholder="Mobile/phone number" />
          <IconInput placeholder="Type your Password" />
          <IconInput placeholder="Confirm your Password" />
          <IconInput placeholder="Select Location" />
        </View>

        <BButton
          onPress={() => {
            navigation.navigate("laundry");
          }}
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
        <Text>Have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
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
