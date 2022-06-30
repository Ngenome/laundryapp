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
const Stack = createStackNavigator();
const orders = [];
export const OfferStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Offers" component={OffersScreen} />
    </Stack.Navigator>
  );
};
export default function OffersScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useFocusEffect(() => {
    dispatch(changeScreen("Offers"));
  });
  return (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>Your Offers</Text>
      {orders.length == 0 ? (
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <NoOffers />
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
    </View>
  );
}
const NoOffers = () => {
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
        source={require("../../assets/laundry/sorry.png")}
        style={{
          height: windowHeight / 6,
          width: windowHeight / 6,
        }}
      />
      <Text style={styles.mdText}>No offers yet</Text>
      <Text
        style={{
          color: Theme.darkText,
          fontFamily: Theme.fonts.secondary,
          fontSize: Theme.sizes.smText,
          textAlign: "center",
          marginTop: windowHeight / 60,
        }}
      >
        As you order more services we will add offers for you
      </Text>
    </View>
  );
};
