import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { windowHeight, windowWidth } from "../styles";
import { Theme } from "../theme";
import { Laundry } from "./laundry";
import CustomerPayments from "./laundry/customerpayments";
import OffersScreen from "./offers";
import HistoryScreen from "./orderhistory";
import ProfileScreen from "./profile";

const Tab = createBottomTabNavigator();
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
      initialRouteName="Laundry"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerTitle: (props) => <LogoTitle {...props} />,
      }}
    >
      <Tab.Screen
        name="Laundry"
        component={Laundry}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="menu"
        component={HistoryScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={CustomerPayments}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="list-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="offers"
        component={OffersScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-offer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
