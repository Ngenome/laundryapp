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
  Modal,
} from "react-native";
import Checkbox from "expo-checkbox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import { Theme } from "../theme";
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import {
  BButton,
  FButton,
  IconInput,
  CenteredButton,
  Rule,
  InlineItemValueView,
  Cardy,
} from "../components";
import { styles, windowHeight, windowWidth } from "../styles";
import { BlurView } from "expo-blur";
import { createStackNavigator } from "@react-navigation/stack";
import WashingMachine from "../assets/washing-machine.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeScreen } from "../redux/actions";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import AwesomeAlert from "react-native-awesome-alerts";
import { services } from "../api/dummy";

const Stack = createStackNavigator();

export function OrderSummary() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useFocusEffect(() => {
    dispatch(changeScreen("Order Summary"));
  });
  const laundryServices = useSelector((state) => state.laundryServices);
  const [alertVisible, setAlertVisible] = useState(false);
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
          height: windowHeight / 1.55,
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
                  fontFamily: Theme.fonts.Nunito_700Bold,
                  color: Theme.primary,
                  fontSize: Theme.sizes.lgText,
                  textAlign: "left",
                }}
              >
                Order
              </Text>
              <Text
                style={{
                  fontFamily: Theme.fonts.Nunito_700Bold,
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
          <ScrollView
            contentContainerStyle={{
              alignItems: "center",
            }}
          >
            {Object.keys(laundryServices).map((e, i) => {
              var items = Object.keys(laundryServices[e]);
              return <ServiceSummaryCard sign="$" service={e} items={items} />;
            })}
            {/* <ServiceSummaryCard
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
            /> */}
          </ScrollView>
        </View>
        {/* <AwesomeAlert
          show={alertVisible}
          showProgress={false}
          title="Add  a service"
          message="Do you want to add another service?"
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No"
          messageStyle={{
            color: Theme.foregroundOnColoredViews,
            fontFamily: Theme.fonts.nunito,
            fontSize: windowWidth / 34,
          }}
          titleStyle={{
            color: Theme.foregroundOnColoredViews,
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            fontSize: windowWidth / 25,
          }}
          contentContainerStyle={{
            backgroundColor: Theme.secondary,
          }}
          cancelButtonColor={Theme.backgrounds.primaryBG}
          confirmButtonTextStyle={{
            color: Theme.foregroundOnColoredViews,
            fontFamily: Theme.fonts.nunito,
            fontSize: windowWidth / 35,
          }}
          cancelButtonTextStyle={{
            color: Theme.foreground,
            fontFamily: Theme.fonts.nunito,
            fontSize: windowWidth / 35,
          }}
          confirmText="Yes, proceed to adding"
          confirmButtonColor={Theme.tertiary}
          onCancelPressed={() => {
            setAlertVisible(false);
          }}
          onConfirmPressed={() => {
            navigation.navigate("Laundry");
            // setAlertVisible(false);
          }}
        /> */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={alertVisible}
          onRequestClose={() => {
            setAlertVisible(false);
          }}
        >
          <BlurView
            intensity={100}
            style={{
              height: windowHeight,
              width: windowWidth,
            }}
          >
            <View
              style={{
                height: windowHeight,
                width: windowWidth,
                backgroundColor: "rgba(50,50,50,0.5)",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: windowHeight / 2,
                  width: windowWidth / 1.3,
                  backgroundColor: Theme.backgrounds.primaryBG,
                  justifyContent: "center",
                  alignContent: "center",
                  borderRadius: windowWidth / 20,
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: windowWidth / 1.4,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Theme.fonts.Nunito_600SemiBold,
                      color: Theme.darkText,
                      fontSize: Theme.sizes.mdText + 2.3,
                      // textAlign: "left",
                    }}
                  >
                    Choose a service
                  </Text>
                  <TouchableOpacity
                    style={
                      {
                        // position: "absolute",
                        // right: -(windowWidth / 70),
                        // bottom: -(windowHeight / 40),
                      }
                    }
                    onPress={() => {
                      setAlertVisible(false);
                    }}
                  >
                    <View
                      style={{
                        height: windowWidth / 13,
                        width: windowWidth / 13,
                        borderRadius: windowWidth / 2,
                        backgroundColor: Theme.backgrounds.primaryBG,
                        justifyContent: "center",
                        alignItems: "center",

                        elevation: 10,
                      }}
                    >
                      <Entypo
                        name="cross"
                        color={Theme.icons.danger}
                        size={windowWidth / 15}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    marginTop: windowHeight / 70,
                    height: windowHeight / 2.3,
                  }}
                >
                  <ScrollView
                    style={{
                      height: "100%",
                    }}
                  >
                    {services.map((s, i) => {
                      return (
                        <Cardy
                          key={i}
                          onPress={() => {
                            navigation.navigate("order", {
                              serviceID: s.serviceID,
                              serviceName: s.name,
                              imageSource: s.image,
                            });
                            setAlertVisible(false);
                          }}
                          bg="white"
                          title={s.name}
                          source={{ uri: s.image }}
                          description={s.serviceDuration}
                          fontFamily={Theme.fonts.Nunito_600SemiBold}
                          cost={34 * ((i + 1) / 2)}
                          s
                        />
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
            </View>
          </BlurView>
        </Modal>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: -(windowWidth / 70),
            bottom: -(windowHeight / 40),
          }}
          onPress={() => {
            setAlertVisible(true);
          }}
        >
          <View
            style={{
              height: windowWidth / 8,
              width: windowWidth / 8,
              borderRadius: windowWidth / 2,
              backgroundColor: Theme.secondary,
              justifyContent: "center",
              alignItems: "center",

              elevation: 10,
            }}
          >
            <AntDesign
              name="plus"
              color={Theme.foregroundOnColoredViews}
              size={windowWidth / 15}
            />
          </View>
        </TouchableOpacity>
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
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                color: Theme.lightDark,
                fontSize: Theme.sizes.mdText + 3,
                textAlign: "left",
              }}
            >
              Address
            </Text>
            <Text
              style={{
                fontFamily: Theme.fonts.Nunito_600SemiBold,
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
                fontFamily: Theme.fonts.Nunito_600SemiBold,
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
        font={Theme.fonts.nunito}
        radiusRatio={23}
        onPress={() => {
          navigation.navigate("checkout");
        }}
      />
    </View>
  );
}

const ServiceSummaryCard = (props) => {
  const laundryServices = useSelector((state) => state.laundryServices);
  return (
    <View
      style={{
        justifyContent: "center",
        alignContent: "center",
        width: windowWidth / 1.2,
        alignItems: "center",
      }}
    >
      <LinearGradient
        colors={Theme.gradientColors}
        start={{ x: 0.7, y: 0 }}
        style={{
          width: windowWidth / 1.2,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          borderTopLeftRadius: windowWidth / 80,
          borderTopRightRadius: windowWidth / 80,
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.foregroundOnColoredViews,
            fontSize: windowWidth / 23,
            textAlign: "left",
          }}
        >
          {props.service}
        </Text>
      </LinearGradient>
      <View
        style={{
          width: windowWidth / 1.2,
          alignItems: "center",
        }}
      >
        {props.items.map((e, i) => {
          return (
            <View
              key={i}
              style={{
                width: windowWidth / 1.23,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: windowWidth / 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: Theme.fonts.Nunito_600SemiBold,
                    color: Theme.darkText,
                    fontSize: Theme.sizes.mdText,
                  }}
                >
                  {/* {laundryServices[props.service][e]} */}

                  {e}
                </Text>
              </View>
              <View
                style={{
                  width: windowWidth / 6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Theme.fonts.Nunito_600SemiBold,
                    color: Theme.darkText,
                    fontSize: Theme.sizes.mdText,
                  }}
                >
                  {/* {laundryServices[props.service][e]} */}

                  {laundryServices[props.service][e].items}
                </Text>
              </View>
              <View
                style={{
                  width: windowWidth / 4,
                  flexDirection: "row",
                  overflow: "scroll",
                }}
              >
                <Text
                  style={{
                    fontFamily: Theme.fonts.Nunito_700Bold,
                    color: Theme.secondary,
                    fontSize: Theme.sizes.mdText,
                  }}
                >
                  {props.sign}
                </Text>
                <Text
                  style={{
                    fontFamily: Theme.fonts.Nunito_700Bold,
                    color: Theme.secondary,
                    fontSize: Theme.sizes.mdText,
                  }}
                >
                  {laundryServices[props.service][e].total.toFixed(1)}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};
