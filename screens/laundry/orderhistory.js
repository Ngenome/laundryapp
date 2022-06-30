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

import { Theme } from "../../theme";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { BButton, CenteredButton, FButton, IconInput } from "../../components";
import { styles, windowHeight, windowWidth } from "../../styles";

import { createStackNavigator } from "@react-navigation/stack";

import { useDispatch } from "react-redux";
import { changeScreen } from "../../redux/actions";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
const Stack = createStackNavigator();
const orders = [];
export default function HistoryScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useFocusEffect(() => {
    dispatch(changeScreen("Order History"));
  });
  return (
    <SafeAreaView
      style={{
        alignContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>Your orders</Text>
      {orders.length == 0 ? (
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <NoOrders />
        </View>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        ></View>
      )}
    </SafeAreaView>
  );
}
const NoOrders = () => {
  return (
    <View
      style={{
        width: windowWidth / 1.3,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/laundry/clock.png")}
        style={{
          height: windowHeight / 6,
          width: windowHeight / 6,
        }}
      />
      <Text style={styles.mdText}>No orders yet</Text>
      <Text
        style={{
          color: Theme.darkText,
          fontFamily: Theme.fonts.secondary,
          fontSize: Theme.sizes.smText,
          textAlign: "center",
          marginTop: windowHeight / 60,
        }}
      >
        Hit the button down below to start your laundry order
      </Text>
    </View>
  );
};
