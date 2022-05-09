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
  Modal,
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
import { Entypo } from "@expo/vector-icons";
import { SearchBar } from "react-native-screens";
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
export function Orderdetail() {
  const [totalItems, setTotalItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();
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
      <Text
        style={{
          fontFamily: Theme.fonts.nunito,
          color: Theme.darkText,
          fontSize: windowWidth / 27,
          textAlign: "left",
        }}
      >
        Service Type
      </Text>
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
              >
                <SearchBar></SearchBar>
              </View>
            </View>
          </Modal>
          <ScrollView
            horizontal={false}
            style={{
              height: "100%",
              flexGrow: 1,
            }}
          >
            <TallyCard
              name="shirt"
              imageURI="https://dictionary.cambridge.org/fr/images/thumb/shirt_noun_002_33400.jpg?version=5.0.225"
            />
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
            8 items
          </Text>
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              color: Theme.secondary,
              fontSize: windowWidth / 20,
              textAlign: "left",
            }}
          >
            $80
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("summary");
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
  const [amount, setAmount] = useState(0);
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
