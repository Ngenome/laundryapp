// import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";

import store from "./redux/store";
// import Checkbox from "expo-checkbox";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Rubik_400Regular, Rubik_300Light } from "@expo-google-fonts/rubik";
import { Theme } from "./theme";
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { BButton, FButton, IconInput } from "./components";
import { styles, windowHeight, windowWidth } from "./styles";

import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/auth/login";
import SignUpScreen from "./screens/auth/signup";

import { Provider, useSelector } from "react-redux";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";
import { FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";
import { Orderdetail } from "./screens/laundry/orderdetail";
import { OrderSummary } from "./screens/laundry/summary";
import { Checkout } from "./screens/checkout";
import { VarelaRound_400Regular } from "@expo-google-fonts/varela-round";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { EditAddress } from "./screens/editAddress";
import EditProfileScreen from "./screens/editprofile";
import LandingScreen from "./screens/landing";
import ShopNavigator, { ShopHomeScreen } from "./screens/shop/home";
import { ShopLandingScreen } from "./screens/shop/landing";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { ShopDiscoverScreen } from "./screens/shop/discover";
import { ShopProductScreen } from "./screens/shop/productdetail";
import { ShopCart } from "./screens/shop/cart";
import CustomerPayments from "./screens/laundry/customerpayments";
import CourierDetails from "./screens/laundry/courier_details";
import LaundryOnboarding from "./screens/laundry/onboarding";
import SubscriptionsScreen from "./screens/laundry/subscriptions";
import HelpScreen from "./screens/help";
import { DrawerModalScreen } from "./screens/drawer-modal";
import {
  ActivityIndicator,
  Provider as PaperProvider,
} from "react-native-paper";
import HomeScreen from "./screens/laundry/home";
const Stack = createStackNavigator();

function LogoTitle(props) {
  console.log(props);
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
      ></Text>
    </View>
  );
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Rubik_400Regular,
    Rubik_300Light,
    FredokaOne_400Regular,
    VarelaRound_400Regular,
    Poppins_400Regular,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });

  if (!fontsLoaded) {
    return (
      <>
        <ActivityIndicator animating={true} color={Theme.secondary} />
      </>
    );
  }

  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              TouchableWithoutFeedback
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="laundry_onboarding"
              component={LaundryOnboarding}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
                headerTitle: () => {
                  return (
                    <View
                      style={{
                        height: windowHeight / 14,
                      }}
                    >
                      <Text style={{}}>{}</Text>
                    </View>
                  );
                },
              }}
            />
            <Stack.Screen
              name="signup"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="order"
              component={Orderdetail}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="summary"
              component={OrderSummary}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="drawer_modal"
              component={DrawerModalScreen}
              screenOptions={{ presentation: "modal" }}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="checkout"
              component={Checkout}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="editaddress"
              component={EditAddress}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="editprofile"
              component={EditProfileScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="shop"
              component={ShopLandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="shop_discover"
              component={ShopDiscoverScreen}
              options={{ headerTitle: HeaderTitle }}
            />
            <Stack.Screen
              name="shop_home"
              component={ShopNavigator}
              options={{ headerTitle: HeaderTitle }}
            />

            <Stack.Screen
              name="subscriptions"
              component={SubscriptionsScreen}
              options={{ headerTitle: HeaderTitle }}
            />
            <Stack.Screen
              name="shop_product_detail"
              component={ShopProductScreen}
              options={{
                headerTitle: (props) => {
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontFamily: Theme.fonts.primaryFont,
                          color: Theme.darkText,
                        }}
                      >
                        {props.title}
                      </Text>
                      <Text
                        style={{
                          fontFamily: Theme.fonts.Nunito_600SemiBold,
                          color: Theme.darkText,
                        }}
                      >
                        Josh
                      </Text>
                    </View>
                    <View
                      style={{
                        width: windowWidth / 2.3,
                      }}
                    ></View>
                    <TouchableWithoutFeedback
                      onPress={() => {
                        navigation.navigate("notifications");
                      }}
                    >
                      <View
                        style={{
                          position: "relative",
                        }}
                      >
                        <Ionicons
                          name="ios-notifications-sharp"
                          size={24}
                          color={Theme.icons.dark}
                        />
                        <Text
                          style={{
                            fontFamily: Theme.fonts.Nunito_600SemiBold,
                            color: Theme.alert,
                            fontSize: 10,
                            padding: 3,
                            backgroundColor: Theme.icons.bellIconBG,
                            borderRadius: 15,
                            textAlign: "center",
                            position: "absolute",
                            right: 0,
                          }}
                        >
                          {5}
                        </Text>
                      </View>
                    </TouchableWithoutFeedback>
                  </View>;
                },
              }}
            />
            <Stack.Screen
              name="shop_cart"
              component={ShopCart}
              options={{
                headerShown: true,
                headerTitle: (props) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontFamily: Theme.fonts.Nunito_600SemiBold,
                            color: Theme.darkText,
                          }}
                        >
                          Cart
                        </Text>
                      </View>
                      <View
                        style={{
                          width: windowWidth / 1.8,
                        }}
                      ></View>
                      <AntDesign
                        name="delete"
                        color={Theme.icons.secondary}
                        size={windowWidth / 16}
                      />
                    </View>
                  );
                },
              }}
            />
            <Stack.Screen
              name="customer_payments"
              component={CustomerPayments}
              options={{ title: "Your Payments" }}
              // options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
            <Stack.Screen
              name="courier_details"
              component={CourierDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="help"
              component={HelpScreen}
              options={{ headerTitle: HeaderTitle }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}

export function Home() {
  return (
    <LinearGradient
      colorcourier_detailss={Theme.gradientColors}
      style={styles.container}
    >
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
const HeaderTitle = (props) => {
  const auth = useSelector((state) => state.auth);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_700Bold,
            color: Theme.darkText,
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.darkText,
          }}
        >
          {auth?.username ?? "User"}
        </Text>
      </View>
      <View
        style={{
          width: windowWidth / 2.3,
        }}
      ></View>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("notifications");
        }}
      >
        <View
          style={{
            position: "relative",
          }}
        >
          <Ionicons
            name="ios-notifications-sharp"
            size={24}
            color={Theme.icons.dark}
          />
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              color: Theme.alert,
              fontSize: 10,
              padding: 3,
              backgroundColor: Theme.icons.bellIconBG,
              borderRadius: 15,
              textAlign: "center",
              position: "absolute",
              right: 0,
            }}
          >
            {5}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
// var hideAll = (
//   <View
//     style={{
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//     }}
//   >
//     <View>
//       <Text
//         style={{
//           fontFamily: Theme.fonts.primaryFont,
//           color: Theme.darkText,
//         }}
//       >
//         {props.title}
//       </Text>
//       <Text
//         style={{
//           fontFamily: Theme.fonts.Nunito_600SemiBold,
//           color: Theme.darkText,
//         }}
//       >
//         Josh
//       </Text>
//     </View>
//     <View
//       style={{
//         width: windowWidth / 2.3,
//       }}
//     ></View>
//     <TouchableWithoutFeedback
//       onPress={() => {
//         navigation.navigate("notifications");
//       }}
//     >
//       <View
//         style={{
//           position: "relative",
//         }}
//       >
//         <Ionicons
//           name="ios-notifications-sharp"
//           size={24}
//           color={Theme.icons.dark}
//         />
//         <Text
//           style={{
//             fontFamily: Theme.fonts.Nunito_600SemiBold,
//             color: Theme.alert,
//             fontSize: 10,
//             padding: 3,
//             backgroundColor: Theme.icons.bellIconBG,
//             borderRadius: 15,
//             textAlign: "center",
//             position: "absolute",
//             right: 0,
//           }}
//         >
//           {5}
//         </Text>
//       </View>
//     </TouchableWithoutFeedback>
//   </View>
// );
