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
  View,
  ScrollView,
  Modal,
} from "react-native";
import Checkbox from "expo-checkbox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../../theme";
import AppLoading from "expo-app-loading";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

import { styles, windowHeight, windowWidth } from "../../styles";

import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import {
  ADDLAUNDRYITEM,
  addService,
  changeScreen,
  replaceServices,
} from "../../redux/actions";
import { Entypo } from "@expo/vector-icons";
import { SearchBar } from "react-native-screens";
import { TouchableOpacity } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import { POD } from "../../helper_functions";
import { LaundryItems } from "../../api/laundryItems";
import OrderCardy from "../../components/mini/order-card";
import TallyCard from "../../components/mini/tally-card";
const Stack = createStackNavigator();

export function Orderdetail() {
  const [totalItems, setTotalItems] = useState(0);
  const [amount, setAmount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [cartData, setCartData] = useState({});
  const [data, setData] = useState(cartData);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [amnts, setAmnts] = useState({});
  const route = useRoute();
  const laundryServices = useSelector((state) => state.laundryServices);
  var tmparr = [];

  useEffect(() => {}, []);

  function CalculateTotal() {
    var tmpTotal = 0;
    var tmpItems = 0;
    Object.keys(cartData).forEach((e) => {
      tmpTotal += cartData[e].total;
      tmpItems += cartData[e].items;
    });
    setAmount(tmpTotal);
    setTotalItems(tmpItems);
    console.log(cartData);
    console.log("from the cart data");
  }

  useEffect(() => {
    CalculateTotal();
    console.log(laundryServices);
    console.log("froma laundry service");
  }, [cartData]);
  useFocusEffect(() => {
    dispatch(changeScreen("Order Detail"));
    // LaundryItems.forEach((LaundryItem) => InitialValue(LaundryItem));
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
          backgroundColor: "white",
          borderRadius: 5,
          height: windowHeight / 8,
          width: windowWidth / 1.3,
          alignContent: "center",

          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: Theme.primary,
            borderRadius: 5,
            height: windowHeight / 16,
            width: windowWidth / 7,
            marginLeft: windowWidth / 18,
          }}
        >
          <Image
            source={{
              uri: route.params.imageSource,
            }}
            style={{
              height: windowHeight / 12,
              width: windowHeight / 12,
            }}
          />
        </View>
        <View
          style={{
            height: windowHeight / 13,
            width: windowWidth / 2,
            // backgroundColor: "red",
            marginLeft: windowWidth / 18,
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: Theme.fonts.nunito,
              color: Theme.darkText,
              fontSize: windowWidth / 25,
            }}
          >
            {route.params.serviceName}
          </Text>
          <Entypo name="chevron-right" color={Theme.darkText} size={34} />
        </View>
      </View>
      <View
        style={{
          marginTop: windowHeight / 40,
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.darkText,
            fontSize: windowWidth / 30,
            textAlign: "left",
          }}
        >
          Clothes Type
        </Text>
        <View
          style={{
            height: windowHeight / 1.6,
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
              ></View>
            </View>
          </Modal>
          <ScrollView
            horizontal={false}
            style={{
              height: "100%",
              flexGrow: 1,
            }}
          >
            {LaundryItems.map((e, i) => {
              if (laundryServices[route.params.serviceName]) {
                if (laundryServices[route.params.serviceName][e.name]) {
                  return (
                    <TallyCard
                      name={e.name}
                      route={route}
                      initialAmnt={
                        laundryServices[route.params.serviceName][e.name].items
                      }
                      key={e.id}
                      cost={e.cost}
                      cartData={cartData}
                      setCartData={setCartData}
                      imageURI={e.image}
                    />
                  );
                } else {
                  return (
                    <TallyCard
                      name={e.name}
                      route={route}
                      initialAmnt={0}
                      key={e.id}
                      cost={e.cost}
                      cartData={cartData}
                      setCartData={setCartData}
                      imageURI={e.image}
                    />
                  );
                }
              } else {
                return (
                  <TallyCard
                    name={e.name}
                    route={route}
                    initialAmnt={0}
                    key={e.id}
                    cost={e.cost}
                    cartData={cartData}
                    setCartData={setCartData}
                    imageURI={e.image}
                  />
                );
              }
            })}
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          width: windowWidth / 1.3,
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
              color: Theme.darkText,
              fontSize: windowWidth / 28,
              textAlign: "left",
            }}
          >
            {totalItems} items
          </Text>
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              color: Theme.secondary,
              fontSize: windowWidth / 20,
              textAlign: "left",
            }}
          >
            ${amount.toFixed(3)}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("summary");
            dispatch(
              addService({
                service: route.params.serviceName,
                value: cartData,
              })
            );
            // InitialValue();
          }}
        >
          <View
            style={{
              height: windowHeight / 14,
              borderRadius: windowWidth / 35,
              backgroundColor: Theme.primary,
              width: windowWidth / 2.5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: Theme.foregroundOnColoredViews,
                fontSize: windowWidth / 23,
                textAlign: "left",
              }}
            >
              Next
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
