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
  FlatList,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../../theme";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { BButton, FButton, IconInput } from "../../components";
import { styles, windowHeight, windowWidth } from "../../styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WashingMachine from "../../assets/washing-machine.svg";
import { useDispatch } from "react-redux";
import { changeScreen } from "../../redux/actions";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import MapView, { Circle, Marker, Callout } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SliderBox } from "react-native-image-slider-box";
import { ShopDiscoverScreen } from "./discover";
import { ProductCard } from "./components";
const Tab = createBottomTabNavigator();
export default function ShopNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="shop_home_page"
      screenOptions={{
        tabBarActiveTintColor: Theme.secondary,
        headerShown: false,
        // headerTitle: (props) => <LogoTitle {...props} />,
      }}
    >
      <Tab.Screen
        name="shop_home_page"
        component={ShopHomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="shop_discover_page"
        component={ShopDiscoverScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="shop_history_page"
        ShopHomeScreen
        component={ShopDiscoverScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="shop_cart_page"
        component={ShopDiscoverScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="opencart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function ShopHomeScreen() {
  const [filterValue, setFilterValue] = useState("All");
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();
  const renderProduct = ({ item }) => (
    <ProductCard
      name={item.name}
      h={item.h}
      w={item.w}
      stars={item.stars}
      sign={item.sign}
      cost={item.cost}
    />
  );
  useFocusEffect(() => {
    dispatch(changeScreen("Edit Address"));
  });
  const images = [
    "http://www.threelayer.com/wp-content/uploads/2017/05/Y300-Gold_750.jpg",

    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639060767-sweatshirts-2022-jgt-1639060404.jpg",

    "https://cdn.shopify.com/s/files/1/2987/0758/products/Piece_Hoodie-Hoodie-LDM201017-232041-Oyster_Gray_Melange_Olive-Ivory_600x.jpg?v=1642675321",
  ];
  return (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
        flex: 1,
        marginTop: windowHeight / 16,
      }}
    >
      <View
        style={{
          height: windowHeight / 19,
          backgroundColor: Theme.primaryBG,
          width: windowWidth / 1.3,
          borderRadius: windowWidth / 50,
        }}
      >
        <TextInput placeholder="Search anything here" />
      </View>
      <HorizontalCategoryView
        active={filterValue}
        items={[
          {
            name: "All",
          },
          {
            name: "T-shirt",
          },
          {
            name: "Hoodie",
          },
          {
            name: "Pants",
          },
          {
            name: "Caps",
          },
        ]}
      />
      <View
        style={{
          height: windowHeight / 4,
        }}
      >
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          onCurrentImagePressed={(index) =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={"resize"}
          resizeMode={"contain"}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)",
          }}
          ImageComponentStyle={{ borderRadius: 15, width: "97%", marginTop: 5 }}
          imageLoadingColor="#2196F3"
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: windowWidth / 1.13,
          }}
        >
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              color: Theme.mdDark,
              fontSize: windowWidth / 27,

              textAlign: "center",
            }}
          >
            Popular this month
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("shop_discover");
            }}
          >
            <Text
              style={{
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                color: Theme.mdDark,
                fontSize: windowWidth / 27,

                textAlign: "center",
              }}
            >
              See all
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: windowHeight / 2.4 }}>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "center",
              alignItems: "center",
              height: windowHeight / 5,
            }}
            data={products}
            renderItem={renderProduct}
            keyExtractor={(product) => product.id}
            onRefresh={() => {
              setTimeout(() => {
                setRefreshing(false);
              }, 1000);
              console.log("refreshed");
            }}
            refreshing={refreshing}
          />
        </View>
      </View>
    </View>
  );
}
const products = [
  {
    id: 1,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
  },
  {
    id: 2,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
  },
  {
    id: 3,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
  },
  {
    id: 4,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
  },
  {
    id: 5,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
  },
  {
    id: 6,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
  },
];
// AIzaSyBrCRMGJ1e-qxRY7bz5pSSzucfAWMZamws
const HorizontalCategoryView = (props) => {
  return (
    <View
      style={{
        width: windowWidth,
        ...props.style,
        justifyContent: "center",
      }}
    >
      <ScrollView
        horizontal={true}
        style={{
          width: windowWidth,
        }}
      >
        {props.items.map((e, i) => {
          return (
            <View
              key={i}
              style={{
                width: windowWidth / 8,
                marginHorizontal: windowWidth / 30,
              }}
            >
              <Text
                style={{
                  fontFamily: Theme.fonts.Nunito_600SemiBold,
                  color: Theme.mdDark,
                  fontSize: windowWidth / 27,

                  textAlign: "center",
                }}
              >
                {e.name}
              </Text>
              {props.active == e.name && (
                <View
                  style={{
                    height: windowHeight / 200,
                    borderRadius: windowHeight / 300,

                    backgroundColor: Theme.secondary,
                  }}
                ></View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
