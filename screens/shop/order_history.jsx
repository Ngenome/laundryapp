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
} from "react-native";

import { Theme } from "../../theme";
import { styles, windowHeight, windowWidth } from "../../styles";

import { createStackNavigator } from "@react-navigation/stack";

import { useDispatch } from "react-redux";
import { changeScreen } from "../../redux/actions";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const Stack = createStackNavigator();
const orders = [
  {
    name: "Plain Shirt",
    delivered: true,
    cost: 11.22,
    sign: "$",
    order_date: "2/4/2022 11:30 am",
    image:
      "https://dictionary.cambridge.org/fr/images/thumb/shirt_noun_002_33400.jpg?version=5.0.225",
  },
  {
    name: "Plain Shirt",
    delivered: true,
    cost: 11.22,
    sign: "$",
    order_date: "2/4/2022 11:30 am",
    image:
      "https://dictionary.cambridge.org/fr/images/thumb/shirt_noun_002_33400.jpg?version=5.0.225",
  },
  {
    name: "Plain Shirt",
    delivered: true,
    cost: 11.22,
    sign: "$",
    order_date: "2/4/2022 11:30 am",
    image:
      "https://dictionary.cambridge.org/fr/images/thumb/shirt_noun_002_33400.jpg?version=5.0.225",
  },
  {
    name: "Plain Shirt",
    delivered: true,
    cost: 11.22,
    sign: "$",
    order_date: "2/4/2022 11:30 am",
    image:
      "https://dictionary.cambridge.org/fr/images/thumb/shirt_noun_002_33400.jpg?version=5.0.225",
  },
  {
    name: "Plain Shirt",
    delivered: true,
    cost: 11.22,
    sign: "$",
    order_date: "2/4/2022 11:30 am",
    image:
      "https://dictionary.cambridge.org/fr/images/thumb/shirt_noun_002_33400.jpg?version=5.0.225",
  },
  {
    name: "Plain Shirt",
    delivered: true,
    cost: 11.22,
    sign: "$",
    order_date: "2/4/2022 11:30 am",
    image:
      "https://dictionary.cambridge.org/fr/images/thumb/shirt_noun_002_33400.jpg?version=5.0.225",
  },
  {
    name: "Plain Shirt",
    delivered: true,
    cost: 11.22,
    sign: "$",
    order_date: "2/4/2022 11:30 am",
    image:
      "https://dictionary.cambridge.org/fr/images/thumb/shirt_noun_002_33400.jpg?version=5.0.225",
  },
  {
    name: "Plain Shirt",
    delivered: true,
    cost: 11.22,
    sign: "$",
    order_date: "2/4/2022 11:30 am",
    image:
      "https://dictionary.cambridge.org/fr/images/thumb/shirt_noun_002_33400.jpg?version=5.0.225",
  },
];
export default function ShopHistoryScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useFocusEffect(() => {
    dispatch(changeScreen("Shopping History"));
  });
  return (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      {orders.length == 0 ? (
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <NoOrders />
        </View>
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <ScrollView>
            {orders.map((e, i) => {
              return (
                <TouchableWithoutFeedback
                  style={{
                    marginVertical: windowHeight / 60,
                  }}
                  onPress={() => {}}
                >
                  <View
                    style={{
                      height: windowHeight / 7,
                      width: windowWidth / 1.2,
                      backgroundColor: Theme.backgrounds.primaryBG,
                      borderRadius: windowWidth / 30,
                    }}
                  >
                    <View
                      style={{
                        height: windowHeight / 15,
                        width: windowWidth / 1.2,
                        alignItems: "center",
                        flexDirection: "row",
                        backgroundColor: Theme.backgrounds.primaryBG,
                      }}
                    >
                      <Text
                        style={{
                          color: Theme.secondary,
                          fontFamily: Theme.fonts.Nunito_800ExtraBold,
                          fontSize: Theme.sizes.mdText,

                          marginHorizontal: 4,
                        }}
                      >
                        {e.name}
                      </Text>

                      <Image
                        source={{
                          uri: e.image,
                        }}
                        style={{
                          height: windowHeight / 15,
                          width: windowHeight / 15,
                          marginLeft: windowWidth / 20,
                        }}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          color: Theme.tertiary,
                          fontFamily: Theme.fonts.Nunito_800ExtraBold,
                          fontSize: Theme.sizes.mdText,

                          marginTop: windowHeight / 200,
                          marginHorizontal: 4,
                        }}
                      >
                        {e.sign}
                        {e.cost}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: windowWidth / 1.3,
                        marginTop: windowHeight / 100,
                      }}
                    >
                      <Text
                        style={{
                          color: Theme.darkText,
                          fontFamily: Theme.fonts.Nunito_800ExtraBold,
                          fontSize: Theme.sizes.mdText,
                          textAlign: "center",
                          marginTop: windowHeight / 200,
                          marginHorizontal: 4,
                        }}
                      >
                        Delivered
                      </Text>
                      <Text
                        style={{
                          color: Theme.darkText,
                          fontFamily: Theme.fonts.Nunito_600SemiBold,
                          fontSize: Theme.sizes.mdText,
                          textAlign: "center",
                          marginTop: windowHeight / 200,
                          marginHorizontal: 4,
                        }}
                      >
                        {e.order_date}
                      </Text>
                      {e.delivered ? (
                        <Feather
                          name="check-circle"
                          color={Theme.icons.success}
                          size={windowWidth / 19}
                        />
                      ) : (
                        <MaterialIcons
                          name="cancel"
                          color={Theme.icons.danger}
                          size={windowWidth / 19}
                        />
                      )}
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        </View>
      )}
    </View>
  );
}
const NoOrders = () => {
  return (
    <View
      style={{
        width: windowWidth / 1.3,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/laundry/clock.png")}
        style={{
          height: windowHeight / 7,
          width: windowHeight / 7,
        }}
      />
      <Text
        style={{
          color: Theme.darkText,
          fontFamily: Theme.fonts.Nunito_800ExtraBold,
          fontSize: Theme.sizes.mdText,
          textAlign: "center",
          marginTop: windowHeight / 60,
          marginHorizontal: 4,
        }}
      >
        Your shopping history will appear here
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Theme.darkText,
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            fontSize: Theme.sizes.smText,
            textAlign: "center",
            marginTop: windowHeight / 60,
          }}
        >
          Go to the
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              color: Theme.darkText,
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              fontSize: Theme.sizes.smText,
              textAlign: "center",
              marginTop: windowHeight / 60,
              marginHorizontal: 4,
            }}
          >
            Shopping screen
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: Theme.darkText,
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            fontSize: Theme.sizes.smText,
            textAlign: "center",
            marginTop: windowHeight / 60,
          }}
        >
          and buy something
        </Text>
      </View>
    </View>
  );
};
