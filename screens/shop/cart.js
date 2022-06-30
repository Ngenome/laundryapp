import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
  useRoute,
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
import React, { useEffect, useState } from "react";
import { styles, windowHeight, windowWidth } from "../../styles";

import { createStackNavigator } from "@react-navigation/stack";

import { useDispatch, useSelector } from "react-redux";
import { CHANGEITEM, changeScreen, REMOVEITEM } from "../../redux/actions";
import { Entypo } from "@expo/vector-icons";
import { Theme } from "../../theme";
import { FlatList } from "react-native-gesture-handler";
import { CenteredButton, HorizontalValueView } from "../../components";
const Stack = createStackNavigator();
var summary = [];
export function ShopCart() {
  const cart = useSelector((state) => state.cart);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
  const [refreshing, setRefreshing] = useState(false);
  //   const [rerenderCart, setCart] = useState(cart);
  useFocusEffect(() => {
    dispatch(changeScreen("Shop Cart"));
  });
  const [paymentSummaryState, setPaymentSummaryState] = useState({
    cost: 0,
    tax: 0,
  });
  const PaymentSummaryCalculator = () => {
    var totalCost = 0;
    var totalTax = 0;
    cart.forEach((e, i) => {
      totalCost += e.amount * e.cost;
      totalTax += e.amount * e.tax;
    });

    setPaymentSummaryState({ cost: totalCost, tax: totalTax });
  };
  const renderProduct = ({ item }) => (
    <ShopTallyCard
      id={item.id}
      name={item.name}
      cost={item.cost}
      imageURI="https://images.houseoffraser.co.uk/images/products/yl011500_4pl.jpg"
      sign={item.sign}
      forceUpdateState={forceUpdate}
      calculator={PaymentSummaryCalculator}
    />
  );
  useEffect(() => {
    PaymentSummaryCalculator();
  }, []);
  return (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          marginTop: windowHeight / 40,
        }}
      >
        <View
          style={{
            height: windowHeight / 2,
            width: windowWidth / 1.2,
          }}
        >
          {cart.length == 0 ? (
            <>
              <Text
                style={{
                  fontFamily: Theme.fonts.Nunito_600SemiBold,
                  color: Theme.mdDark,
                  fontSize: windowWidth / 25,

                  textAlign: "center",
                }}
              >
                Sorry your cart is empty
              </Text>
              <Image
                source={require("../../assets/empty-box.png")}
                style={{
                  width: windowWidth / 1,
                  height: windowHeight / 3,
                  resizeMode: "contain",
                }}
              />
            </>
          ) : (
            <FlatList
              data={cart}
              onRefresh={() => {
                setTimeout(() => {
                  setRefreshing(false);
                }, 1000);
                console.log("refreshed");
              }}
              refreshing={refreshing}
              renderItem={renderProduct}
              keyExtractor={(product) => product.id}
            />
          )}
        </View>
      </View>
      <View
        style={{
          width: windowWidth,
          flex: 1,

          alignItems: "center",

          alignContent: "center",
          backgroundColor: Theme.primaryBG,
          borderTopRightRadius: windowWidth / 10,
          borderTopLeftRadius: windowWidth / 10,
        }}
      >
        <View
          style={{
            width: windowWidth / 7,
            height: windowHeight / 140,
            backgroundColor: Theme.secondary,
            marginTop: windowHeight / 80,
            borderRadius: windowWidth / 100,
          }}
        ></View>
        <View
          style={{
            width: windowWidth / 7,
            marginTop: windowHeight / 40,
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            width: windowWidth / 1.4,
          }}
        >
          <HorizontalValueView
            item="Sub Total"
            value={paymentSummaryState.cost.toFixed(2)}
            money
            sign="$"
          />
          <HorizontalValueView
            item="Tax "
            value={paymentSummaryState.tax.toFixed(2)}
            money
            sign="$"
          />
          <HorizontalValueView
            item="Total"
            value={(paymentSummaryState.cost + paymentSummaryState.tax).toFixed(
              2
            )}
            money
            sign="$"
          />

          <View
            style={{
              width: windowWidth / 1.1,
              alignItems: "center",
            }}
          >
            <CenteredButton
              hRatio={20}
              wRatio={1.4}
              style={{
                marginTop: windowHeight / 25,
              }}
              radiusRatio={20}
              title="Checkout"
              bgColor={Theme.secondary}
              onPress={() => {
                navigation.navigate("shop_cart", {
                  id: route.params.id,
                  name: route.params.name,
                  size: activeSize,
                  color: activeColor,
                });
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

function ShopTallyCard(props) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  var [ID, setID] = useState(null);
  useEffect(() => {
    cart.map((e, i) => {
      if (e.id == props.id) {
        setID(i);
      }
    });
  }, []);
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        marginVertical: windowHeight / 60,
        height: windowHeight / 6,
        width: windowWidth / 1.3,
        alignContent: "center",

        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          height: windowHeight / 16,
          width: windowWidth / 7,
          marginLeft: windowWidth / 18,
        }}
      >
        <Image
          source={{
            uri: props.imageURI,
          }}
          style={{
            height: windowHeight / 12,
            width: windowHeight / 12,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: windowWidth / 2,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            height: windowHeight / 8,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: Theme.fonts.secondary,
              color: Theme.darkText,
              fontSize: windowWidth / 25,
            }}
          >
            {props.name}
          </Text>

          <Text
            style={{
              fontFamily: Theme.fonts.secondary,
              color: Theme.darkText,
              fontSize: windowWidth / 25,
            }}
          >
            {props.sign} {props.cost}
          </Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(REMOVEITEM(props.id));
              props.calculator();
              props.forceUpdateState();
            }}
          >
            <Text
              style={{
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                color: Theme.mdDark,
                fontSize: windowWidth / 25,
              }}
            >
              Remove
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setAmount(amount + 1);
              dispatch(
                CHANGEITEM({ id: props.id, item: "amount", value: amount })
              );
              props.calculator();
              props.forceUpdateState();
            }}
          >
            <Entypo
              name="plus"
              color={Theme.darkText}
              size={Theme.sizes.orderIconSize}
            />
          </TouchableOpacity>
          <Text>{amount}</Text>
          <TouchableOpacity
            onPress={() => {
              if (amount !== 0) {
                setAmount(amount - 1);
                dispatch(
                  CHANGEITEM({ id: props.id, item: "amount", value: amount })
                );
                props.forceUpdateState();
                props.calculator();
                props.forceUpdateState();
              }
            }}
          >
            <Entypo
              name="minus"
              color={Theme.darkText}
              size={Theme.sizes.orderIconSize}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
