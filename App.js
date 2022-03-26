import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import store from "./redux/store";
import Checkbox from "expo-checkbox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Rubik_400Regular, Rubik_300Light } from "@expo-google-fonts/rubik";
import { Theme } from "./theme";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { BButton, FButton, IconInput } from "./components";
import { styles, windowHeight, windowWidth } from "./styles";

import { createStackNavigator } from "@react-navigation/stack";
import MainSlide from "./src/screens/Slider";

import { useNavigation } from "@react-navigation/native";
import { Laundry } from "./screens/laundry";
import LoginScreen from "./screens/login";
import SignUpScreen from "./screens/signup";
import HomeScreen from "./screens/home";
import { Provider, useSelector } from "react-redux";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
} from "@expo-google-fonts/nunito";
Poppins_400Regular;
import { FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";

import { Orderdetail } from "./screens/orderdetail";
import { OrderSummary } from "./screens/summary";
import { Checkout } from "./screens/checkout";
import { VarelaRound_400Regular } from "@expo-google-fonts/varela-round";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { EditAddress } from "./screens/editAddress";
import HistoryScreen, { OrderHistory } from "./screens/orderhistory";
import EditProfileScreen from "./screens/editprofile";
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();
function LogoTitle(props) {
  return (
    <View
      style={{
        flex: 1,
        width: windowWidth / 1.8,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: windowWidth / 15,
          fontWeight: "bold",
        }}
      >
        {props.title}Home
      </Text>
    </View>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Rubik_400Regular,
    Rubik_300Light,
    FredokaOne_400Regular,
    VarelaRound_400Regular,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
            // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name="signup"
            component={SignUpScreen}
            options={{ headerShown: false }}
            // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name="order"
            component={Orderdetail}
            options={{ headerShown: true }}
            // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name="summary"
            component={OrderSummary}
            options={{ headerShown: true }}
            // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name="checkout"
            component={Checkout}
            options={{ headerShown: true }}
            // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name="editaddress"
            component={EditAddress}
            options={{ headerShown: true }}
            // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
          <Stack.Screen
            name="editprofile"
            component={EditProfileScreen}
            options={{ headerShown: true }}
            // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export function Home() {
  return (
    <LinearGradient colors={Theme.gradientColors} style={styles.container}>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Welcome to</Text>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          RIBRAD
        </Text>
      </View>
      <Text>Professional laundry service for all your clothes </Text>

      <Text>
        Our services prioritize your satisfaction, satisfaction is our priority
      </Text>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}
