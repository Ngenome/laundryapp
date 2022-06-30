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
  Modal,
  Alert,
  BackHandler,
} from "react-native";
import Checkbox from "expo-checkbox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../theme";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { BButton, FButton, IconInput, LabelledInput } from "../components";
import { styles, windowHeight, windowWidth } from "../styles";

import { createStackNavigator } from "@react-navigation/stack";
import { StripeProvider, useStripe } from "@stripe/stripe-react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeScreen } from "../redux/actions";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { CenteredButton, InlineItemValueView } from "../components";
import { KeyboardAvoidingView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native";
import colors from "../theme/colors";
import appearance from "./constants/appearance";
import { STRIPE_PUBLISHABLE_KEY } from "@env";
const Stack = createStackNavigator();
const OrderCardy = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Theme.primary,
        width: windowWidth / 1.3,
        borderRadius: windowWidth / 39,

        height: windowHeight / 9,
        marginVertical: windowHeight / 32,
      }}
    >
      <View
        style={{
          padding: windowWidth / 30,
          flexDirection: "row",
          justifyContent: "space-between",
          width: windowWidth / 1.32,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              fontSize: 15,
              fontWeight: "bold",
              height: windowHeight / 12,
              borderRadius: 7,
              width: windowWidth / 6,
              backgroundColor: "red",
              marginRight: windowWidth / 16,
            }}
          ></View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: Theme.darkText,
              }}
            >
              i
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: Theme.lightDark,
              }}
            >
              24hr service
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: Theme.secondary,
            }}
          >
            $10
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: Theme.lightDark,
            }}
          >
            /item
          </Text>
        </View>
      </View>
    </View>
  );
};
export function Checkout() {
  const dispatch = useDispatch();
  const [paySystem, setPaySystem] = useState("card");
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("1");
  const stripe = useStripe();

  const pay = async () => {
    try {
      const finalAmount = parseInt("100");
      if (finalAmount < 1) return Alert.alert("You cannot donate below 1 INR");
      const response = await fetch("http://192.168.43.168:5000/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: finalAmount, name: "Kelvin Ngeno" }),
      });
      const data = await response.json();
      if (!response.ok) {
        return Alert.alert(data.message);
      }
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: data.clientSecret,
        merchantDisplayName: "kelvin Ngeno",
      });
      if (initSheet.error) {
        console.error(initSheet.error);
        return Alert.alert(initSheet.error.message);
      }
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret: data.clientSecret,
      });
      if (presentSheet.error) {
        console.error(presentSheet.error);
        return Alert.alert(presentSheet.error.message);
      }
      Alert.alert("Donated successfully! Thank you for the donation.");
    } catch (err) {
      console.error(err);
      Alert.alert("Payment failed!");
    }
  };
  useFocusEffect(() => {
    dispatch(changeScreen("Check out"));
  });
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "YES",
          onPress: () => {
            setModalVisible(false);
            BackHandler.exitApp();
          },
        },
      ]);
      return setModalVisible(false);
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  return (
    <StripeProvider publishableKey={STRIPE_PUBLISHABLE_KEY}>
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
            navigation.goBack();
          }}
        >
          <View
            style={{
              height: windowHeight,
              width: windowWidth,
              backgroundColor: "rgba(100,100,100,0.2)",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                height: windowHeight / 1.7,
                width: windowWidth / 1.2,
                backgroundColor: Theme.primaryBG,
                borderRadius: windowHeight / 40,
              }}
            >
              <View
                style={{
                  height: windowHeight / 6,
                  width: windowHeight / 6,
                  backgroundColor: Theme.secondary,
                  borderRadius: windowHeight / 4,
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons
                  name="done"
                  size={windowHeight / 7}
                  color={Theme.icons.primary}
                />
              </View>
              <Text
                style={{
                  fontFamily: Theme.fonts.secondary,
                  color: Theme.darkText,
                  fontSize: windowWidth / 20,
                }}
              >
                Your order is successful
              </Text>

              <Text
                style={{
                  fontFamily: Theme.fonts.secondary,
                  color: Theme.darkText,
                  fontSize: Theme.sizes.smText + 5,
                  textAlign: "center",
                }}
              >
                You can track the order in the "Orders" section
              </Text>

              <CenteredButton
                hRatio={17}
                wRatio={2}
                radiusRatio={Theme.sizes.mdRadius}
                title="View your payments"
                font={Theme.fonts.secondary}
                color={Theme.foregroundOnColoredViews}
                bgColor={Theme.primary}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("customer_payments");
                }}
              />
              <View
                style={{
                  marginTop: windowHeight / 30,
                }}
              >
                <TouchableWithoutFeedback
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate("Laundry");
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Theme.fonts.secondary,
                      color: Theme.secondary,
                      fontSize: Theme.sizes.smText + 5,
                      textAlign: "center",
                    }}
                  >
                    Go to Home
                  </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => {
                    setModalVisible(false);
                    BackHandler.exitApp();
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Theme.fonts.secondary,
                      color: Theme.darkText,
                      fontSize: Theme.sizes.smText + 5,
                      textAlign: "center",
                    }}
                  >
                    EXIT APP
                  </Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </Modal>
        <TopNavigation paySystem={paySystem} setPaySystem={setPaySystem} />
        <CreditCard auth={auth} />
        <TotalsView />
        <CardDetails />
        <BottomTotal popupState={setModalVisible} pay={pay} />
      </View>
    </StripeProvider>
  );
}
function CardDetails() {
  const [holderName, setHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  return (
    <View
      style={{
        marginTop: windowHeight / 30,
        flex: 1,
        position: "relative",
        left: 0,
      }}
    >
      <LabelledInput
        hRatio={12}
        wRatio={1.3}
        placeholder="Your name here"
        label=" Card holder name"
        onChangeText={(text) => {
          setHolderName(text);
        }}
        radiusRatio={40}
      />
      <LabelledInput
        hRatio={12}
        wRatio={1.3}
        placeholder="Your name here"
        label=" Card number"
        onChangeText={(text) => {
          setCardNumber(text);
        }}
        radiusRatio={40}
      />
    </View>
  );
}

function TotalsView() {
  return (
    <View
      style={{
        marginTop: windowHeight / 30,
        height: windowHeight / 6,
        width: windowWidth / 1.3,
        backgroundColor: colors[appearance].viewBackground,
        borderRadius: windowWidth / 25,
        alignItems: "center",
      }}
    >
      <InlineItemValueView
        color={"red"}
        valueColor={colors[appearance].tint}
        style={{
          width: windowWidth / 1.5,

          marginTop: windowHeight / 65,
        }}
        item="Sub Total"
        value="$80"
      />
      <InlineItemValueView
        style={{
          width: windowWidth / 1.5,
        }}
        item="Tax"
        value="$0.4"
      />
      <InlineItemValueView
        style={{
          width: windowWidth / 1.5,
          marginTop: windowHeight / 30,
        }}
        item="Total"
        value="$80.4"
      />
    </View>
  );
}
function CreditCard(props) {
  var auth = props.auth;
  return (
    <View
      style={{
        height: windowHeight / 6,
        width: windowWidth / 1.3,
        backgroundColor: Theme.secondary,
        borderRadius: Theme.sizes.mdRadius,
        alignItems: "center",
        marginTop: windowHeight / 54,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-between",
          marginTop: windowHeight / 56,
        }}
      >
        <View
          style={{
            height: windowHeight / 40,
            width: windowWidth / 16,
            backgroundColor: "white",
            borderRadius: windowWidth / 30,
          }}
        ></View>

        <View
          style={{
            height: windowHeight / 37,
            width: windowWidth / 7,
            backgroundColor: "white",
            borderRadius: windowWidth / 30,
          }}
        ></View>
      </View>
      <View
        style={{
          marginTop: windowHeight / 30,
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: colors[appearance].foreground,
            fontSize: windowWidth / 20,
          }}
        >
          4544 {"   "} **** {"   "}**** 9876
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        <Text style={styles.smText}>{auth.username}</Text>
        <Text style={styles.smText}>05/23</Text>
      </View>
    </View>
  );
}
function BottomTotal(props) {
  var popupState = props.popupState;
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: windowWidth / 1.3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        marginBottom: windowHeight / 40,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: Theme.fonts.nunito,
            color: Theme.secondary,
            fontSize: windowWidth / 20,
            textAlign: "left",
          }}
        >
          Total
        </Text>
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.tertiary,
            fontSize: windowWidth / 22,
            textAlign: "left",
          }}
        >
          $80
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          // popupState(true);
          props.pay();
        }}
      >
        <View
          style={{
            height: windowHeight / 16,
            borderRadius: windowWidth / 30,
            backgroundColor: Theme.primary,
            width: windowWidth / 2.5,
            justifyContent: "center",

            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              color: colors[appearance].foreground,
              fontSize: windowWidth / 23,
              textAlign: "left",
            }}
          >
            Next
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
function TopNavigation(props) {
  const setPaySystem = props.setPaySystem;
  const paySystem = props.paySystem;
  return (
    <View
      style={{
        width: windowWidth / 1.1,
        flexDirection: "row",
        height: windowHeight / 14,
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CenteredButton
        hRatio={20}
        wRatio={4}
        color={
          paySystem == "card"
            ? colors[appearance].foreground
            : Theme.lightDarkBG
        }
        radiusRatio={Theme.sizes.mdRadius}
        title="Credit card"
        bgColor={paySystem == "card" ? Theme.secondary : Theme.lightDarkBG}
        onPress={() => {
          setPaySystem("card");
        }}
      />
      <CenteredButton
        hRatio={20}
        wRatio={4}
        color={
          paySystem == "paypal" ? colors[appearance].foreground : Theme.primary
        }
        radiusRatio={Theme.sizes.mdRadius}
        title="Pay pal"
        bgColor={paySystem == "paypal" ? Theme.secondary : Theme.lightDarkBG}
        onPress={() => {
          setPaySystem("paypal");
        }}
      />
      <CenteredButton
        hRatio={20}
        wRatio={4}
        radiusRatio={Theme.sizes.mdRadius}
        title="Apple pay"
        color={
          paySystem == "applepay"
            ? colors[appearance].foreground
            : Theme.primary
        }
        bgColor={paySystem == "applepay" ? Theme.secondary : Theme.lightDarkBG}
        onPress={() => {
          setPaySystem("applepay");
        }}
      />
    </View>
  );
}
function TallyCard(props) {
  const [amount, setAmount] = useState(1);
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        marginVertical: windowHeight / 60,
        height: windowHeight / 12,
        width: windowWidth / 1.3,
        alignContent: "center",

        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          backgroundColor: "pink",
          borderRadius: 5,
          height: windowHeight / 16,
          width: windowWidth / 7,
          marginLeft: windowWidth / 18,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          width: windowWidth / 2,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: colors[appearance].foreground,
            fontSize: windowWidth / 25,
          }}
        >
          Shirt
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setAmount(amount + 1);
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
