import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { windowHeight, windowWidth } from "../../styles";
import { Theme } from "../../theme";
import LaundryStack, { Laundry } from "./laundry";
import { PaymentsStack } from "./customerpayments";
import { OfferStack } from "./offers";
import HistoryScreen from "./orderhistory";
import ProfileScreen, { ProfileStack } from "../profile";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { SIZES } from "../constants";
const Tab = createMaterialBottomTabNavigator();
function LogoTitle() {
  const navigation = useNavigation();
  const screen = useSelector((state) => state.change);
  return (
    <View
      style={{
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        width: windowWidth / 2,
        backgroundColor: Theme.primary,
        // elevation: 2,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <FontAwesome5
          name="chevron-left"
          color={Theme.darkText}
          size={windowHeight / 50}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: windowHeight / 40,
          fontFamily: Theme.fonts.Nunito_600SemiBold,
          color: Theme.darkText,
        }}
      >
        {screen}
      </Text>
    </View>
  );
}
export default function HomeScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled={true}
      activeColor={Theme.secondary}
      inactiveColor={Theme.primary}
      barStyle={{ backgroundColor: Theme.backgrounds.primaryBG }}
      keyboardHidesNavigationBar={true}
      screenOptions={{}}
    >
      <Tab.Screen
        name="Laundry"
        component={LaundryStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home"
              color={color}
              size={SIZES.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="menu"
        component={HistoryScreen}
        options={{
          tabBarShowLabel: true,
          tabBarBadge: "2",
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" color={color} size={SIZES.tabBarIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={PaymentsStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="list-alt"
              color={color}
              size={SIZES.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="offers"
        component={OfferStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="local-offer"
              color={color}
              size={SIZES.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={SIZES.tabBarIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
