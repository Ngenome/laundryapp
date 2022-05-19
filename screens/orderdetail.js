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

import { Theme } from "../theme";
import AppLoading from "expo-app-loading";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { BButton, FButton, IconInput } from "../components";
import { styles, windowHeight, windowWidth } from "../styles";

import { createStackNavigator } from "@react-navigation/stack";
import WashingMachine from "../assets/washing-machine.svg";
import { useDispatch, useSelector } from "react-redux";
import { ADDLAUNDRYITEM, addService, changeScreen } from "../redux/actions";
import { Entypo } from "@expo/vector-icons";
import { SearchBar } from "react-native-screens";
import { TouchableOpacity } from "react-native-gesture-handler";
import DropDownPicker from "react-native-dropdown-picker";
import { POD } from "../helper_functions";
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

const LaundryItems = [
  {
    name: "shirt",
    cost: 22.44,
    id: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbjA2UwhoXfZFCfq96bJlD8r_MqhoZPobdw&usqp=CAU",
  },
  {
    name: "dress",
    cost: 22.44,
    id: "2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbjA2UwhoXfZFCfq96bJlD8r_MqhoZPobdw&usqp=CAU",
  },
  {
    name: "coat",
    cost: 22.44,
    id: "3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbjA2UwhoXfZFCfq96bJlD8r_MqhoZPobdw&usqp=CAU",
  },
  {
    name: "t-shirt",
    cost: 22.44,
    id: "7",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbjA2UwhoXfZFCfq96bJlD8r_MqhoZPobdw&usqp=CAU",
  },
  {
    name: "sweater",
    cost: 22.44,
    id: "4",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbjA2UwhoXfZFCfq96bJlD8r_MqhoZPobdw&usqp=CAU",
  },
  {
    name: "trousers",
    cost: 22.44,
    id: "6",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbjA2UwhoXfZFCfq96bJlD8r_MqhoZPobdw&usqp=CAU",
  },
  {
    name: "Skirt",
    cost: 22.44,
    id: "5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbjA2UwhoXfZFCfq96bJlD8r_MqhoZPobdw&usqp=CAU",
  },
];
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
  // const [items, setItems] = useState([
  //   { label: "Apple", value: "apple" },
  //   { label: "Banana", value: "banana" },
  // ]);
  const [amnts, setAmnts] = useState({});
  const route = useRoute();
  const laundryServices = useSelector((state) => state.laundryServices);
  function InitialValue() {
    var x = { ...amnts };
    if (
      route.params !== undefined &&
      laundryServices[route.params.serviceName] !== undefined
    ) {
      console.log("route.params");
      console.log(route.params);
      if (laundryServices[route.params.serviceName]) {
        setCartData(laundryServices[route.params.name]);
        if (laundryServices[route.params.serviceName][e.name]) {
          x[laundryServices[route.params.serviceName][e.name]] =
            laundryServices[route.params.serviceName][e.name].items;
          setAmnts(x);

          // setAmount(23);
        } else {
          laundryServices[route.params.serviceName][e.name] = {
            items: 0,
            total: 0,
          };
          console.log(laundryServices[route.params.serviceName]);

          x[laundryServices[route.params.serviceName][e.name]] = 0;
          setAmnts(x);
        }
      } else {
        laundryServices[route.params.serviceName] = {};
        x[laundryServices[route.params.serviceName][e.name]] = 0;
        setAmnts(x);
      }
      setCartData({});
    }
  }
  InitialValue();
  // function InitialValue() {
  //   if (laundryServices[route.params.name]) {
  //     setCartData(laundryServices[route.params.name]);
  //   } else {
  //     setCartData({});
  //   }
  // }

  // useFocusEffect(() => {
  //   setCartData({});
  // });

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
  }

  useEffect(() => {
    CalculateTotal();
    console.log(laundryServices);
    console.log("froma laundry service");
  }, [cartData]);
  useFocusEffect(() => {
    dispatch(changeScreen("Order Detail"));
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
        {/* <Text
          style={{
            fontFamily: Theme.fonts.nunito,
            color: Theme.darkText,
            fontSize: windowWidth / 27,
            textAlign: "left",
          }}
        >
          Service Type
        </Text> */}
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
        {/* <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={{
            width: windowWidth / 2.3,
            zIndex: 3,
            position: "relative",
          }}
          style={{
            backgroundColor: "white",
          }}
          textStyle={{
            fontSize: 12,
            color: Theme.secondary,
          }}
          searchContainerStyle={
            {
              // borderBottomColor: "#dfdfdf",
            }
          }
        /> */}
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
              return (
                <TallyCard
                  name={e.name}
                  route={route}
                  inital={amnts}
                  key={e.id}
                  cost={e.cost}
                  cartData={cartData}
                  setCartData={setCartData}
                  imageURI={e.image}
                />
              );
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
            InitialValue();
          }}
        >
          <View
            style={{
              height: windowHeight / 14,
              borderRadius: windowWidth / 35,
              backgroundColor: Theme.secondary,
              width: windowWidth / 2.5,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: Theme.primary,
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

function TallyCard(props) {
  const route = props.route;
  const laundryServices = useSelector((state) => state.laundryServices);
  // const initial
  // laundryServices?.[route.params.serviceName]?.[props.name].items !==
  // (undefined || null)
  //   ? laundryServices[route.params.serviceName][props.name].items
  //   : 0;
  // useFocusEffect(() => {
  //   console.log(
  //     laundryServices[route.params.serviceName][props.name].items ||
  //       "nothing" + " from tally"
  //   );
  // });
  const [amount, setAmount] = useState(0);
  // function InitialValue() {
  //   if (laundryServices[route.params.serviceName]) {
  //     if (laundryServices[route.params.serviceName][props.name]) {
  //       setAmount(laundryServices[route.params.serviceName][props.name].items);
  //       // setAmount(23);
  //     } else {
  //       laundryServices[route.params.serviceName][props.name];
  //       console.log(laundryServices[route.params.serviceName]);
  //       setAmount(0);
  //     }
  //   } else {
  //     laundryServices[route.params.serviceName] = {};
  //     setAmount(0);
  //   }
  // }

  var cartData = { ...props.cartData };
  // // useFocusEffect(
  // //   useCallback(() => {
  // //     InitialValue();
  // //   }, [])
  // //   // return () => {};
  // // );
  useEffect(() => {
    setAmount(props.inital[props.name] ?? 0);
  }, []);
  useEffect(() => {
    console.log("the " + props.name + "total is" + amount * props.cost);
    cartData[props.name] = {
      items: amount,
      total: amount * props.cost,
    };
    props.setCartData(cartData);
  }, [amount]);

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
            height: windowHeight / 15,
            width: windowHeight / 15,
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
        <Text
          style={{
            fontFamily: Theme.fonts.nunito,
            color: Theme.darkText,
            fontSize: windowWidth / 25,
          }}
        >
          {props.name}
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

// export const SearchBar = (props) => {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         justifyContent: "space-between",
//       }}
//     >
//       <TextInput
//         placeholder="Search anything here"
//         onChangeText={(text) => {
//           props.setSearchText(text);
//         }}
//       />
//       <TouchableOpacity
//         style={{
//           padding: windowWidth / 80,
//         }}
//         onPress={props.onSearch}
//       >
//         <FontAwesome
//           name="search"
//           color={Theme.icons.secondary}
//           size={windowHeight / 30}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };
