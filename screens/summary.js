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
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../theme";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { BButton, FButton, IconInput } from "../components";
import { styles, windowHeight, windowWidth } from "../styles";

import { createStackNavigator } from "@react-navigation/stack";
import WashingMachine from "../assets/washing-machine.svg";
import { useDispatch } from "react-redux";
import { changeScreen } from "../redux/actions";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { Rule } from "./laundry/customerpayments";
const Stack = createStackNavigator();

export function OrderSummary() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useFocusEffect(() => {
    dispatch(changeScreen("Order Summary"));
  });
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
          height: windowHeight / 1.6,
          backgroundColor: Theme.primaryBG,
          width: windowWidth / 1.2,
          borderRadius: windowWidth / 30,
        }}
      >
        <LinearGradient
          colors={Theme.gradientColors}
          style={{
            borderRadius: 10,
          }}
        >
          <View
            style={{
              height: windowHeight / 4.5,
              alignItems: "center",

              flexDirection: "row",
              width: windowWidth / 1.2,
              borderRadius: windowWidth / 30,
            }}
          >
            <View
              style={{
                marginLeft: windowWidth / 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: Theme.primary,
                  fontSize: Theme.sizes.lgText,
                  textAlign: "left",
                }}
              >
                Order
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  color: Theme.primary,
                  fontSize: Theme.sizes.lgText,
                  textAlign: "left",
                }}
              >
                Detail
              </Text>
            </View>
            <Image
              source={require("../assets/laundry/laundry-basket.png")}
              style={{
                marginLeft: windowWidth / 10,
                height: windowHeight / 8,
                width: windowHeight / 8,
              }}
            />
          </View>
        </LinearGradient>
        <View
          style={{
            marginTop: windowHeight / 50,
            height: windowHeight / 1.6 - windowHeight / 4.1,
          }}
        >
          <ScrollView>
            <ServiceSummaryCard
              sign="$"
              service="Wash & Fold"
              items={[
                { clothe: "Tshirt", amount: 2, cost: 10 },
                { clothe: "Coat", amount: 5, cost: 30 },
                { clothe: "Tie", amount: 2, cost: 3 },
                { clothe: "Shirt", amount: 3, cost: 10 },
              ]}
            />
            <Rule bg={Theme.lightDark} mv={windowHeight / 50} />
            <ServiceSummaryCard
              sign="$"
              service="Dry Clean"
              items={[
                { clothe: "Jacket", amount: 2, cost: 10 },
                { clothe: "Suit", amount: 5, cost: 30 },
                { clothe: "Tie", amount: 2, cost: 3 },
                { clothe: "Shirt", amount: 3, cost: 10 },
              ]}
            />
            <Rule bg={Theme.lightDark} mv={windowHeight / 50} />
            <ServiceSummaryCard
              sign="$"
              service="Dry Clean"
              items={[
                { clothe: "Jacket", amount: 2, cost: 10 },
                { clothe: "Suit", amount: 5, cost: 30 },
                { clothe: "Tie", amount: 2, cost: 3 },
                { clothe: "Shirt", amount: 3, cost: 10 },
              ]}
            />
            <Rule bg={Theme.lightDark} mv={windowHeight / 50} />
            <ServiceSummaryCard
              sign="$"
              service="Dry Clean"
              items={[
                { clothe: "Jacket", amount: 2, cost: 10 },
                { clothe: "Suit", amount: 5, cost: 30 },
                { clothe: "Tie", amount: 2, cost: 3 },
                { clothe: "Shirt", amount: 3, cost: 10 },
              ]}
            />
          </ScrollView>
        </View>
        <InlineItemValueView
          style={{
            marginTop: windowHeight / 30,
          }}
        />
      </View>
      <View
        style={{
          height: windowHeight / 8,
          width: windowWidth / 1.2,
          borderRadius: windowWidth / 30,
          marginVertical: windowHeight / 30,
          backgroundColor: "white",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            fontSize: 15,

            height: windowHeight / 12,
            borderRadius: 7,
            width: windowWidth / 6,
            backgroundColor: Theme.lightDarkBG,
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: windowWidth / 20,
          }}
        >
          <MaterialIcons
            name="location-pin"
            color={Theme.secondary}
            size={Theme.sizes.lgIcon}
          />
        </View>
        <View
          style={{
            marginLeft: windowWidth / 30,
            flexDirection: "row",
            justifyContent: "space-between",
            flex: 1,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: Theme.fonts.secondary,
                color: Theme.lightDark,
                fontSize: Theme.sizes.mdText + 3,
                textAlign: "left",
              }}
            >
              Address
            </Text>
            <Text
              style={{
                fontFamily: Theme.fonts.secondary,
                color: Theme.darkText,
                fontSize: Theme.sizes.mdText + 0.3,
                textAlign: "left",
              }}
            >
              Lumumba Drive
            </Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate("editaddress");
            }}
          >
            <Text
              style={{
                fontFamily: Theme.fonts.primaryFont,
                color: Theme.secondary,
                fontSize: Theme.sizes.mdText,
                textAlign: "left",
              }}
            >
              edit
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <CenteredButton
        hRatio={14}
        wRatio={1.2}
        title="Shedule Pickup Now"
        bgColor={Theme.secondary}
        radiusRatio={23}
        onPress={() => {
          navigation.navigate("checkout");
        }}
      />
    </View>
  );
}

const ServiceSummaryCard = (props) => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          color: Theme.lightDark,
          fontSize: windowWidth / 23,
          textAlign: "left",
        }}
      >
        {props.service}
      </Text>
      <View>
        {props.items.map((e, i) => {
          return (
            <View
              key={i}
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{}}>
                <Text
                  style={{
                    fontFamily: Theme.fonts.secondary,
                    color: Theme.darkText,
                    fontSize: Theme.sizes.mdText,
                  }}
                >
                  {e.amount}
                  {"  "}
                  {e.clothe}
                </Text>
              </View>

              <View>
                <Text
                  style={{
                    fontFamily: Theme.fonts.primaryFont,
                    color: Theme.secondary,
                    fontSize: Theme.sizes.mdText + 3,
                  }}
                >
                  {props.sign} {e.cost}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export const InlineItemValueView = (props) => {
  return (
    <View
      style={[
        { flexDirection: "row", justifyContent: "space-between" },
        props.style,
      ]}
    >
      <View style={{}}>
        <Text
          style={{
            fontWeight: "bold",
            color: Theme.mdDark,
            fontSize: Theme.sizes.mdText + 3,
          }}
        >
          {props.item}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontWeight: "bold",
            color: Theme.secondary,
            fontSize: Theme.sizes.mdText + 3,
          }}
        >
          {props.value}
        </Text>
      </View>
    </View>
  );
};

export const CenteredButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          {
            height: windowHeight / props.hRatio,
            borderRadius: windowWidth / props.radiusRatio,
            backgroundColor: props.bgColor,
            width: windowWidth / props.wRatio,
            justifyContent: "center",

            alignContent: "center",
            alignItems: "center",
          },
          props.style,
        ]}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: Theme.primary,
            fontSize: windowWidth / 23,
            textAlign: "left",
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
