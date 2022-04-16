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

import { createStackNavigator } from "@react-navigation/stack";
import WashingMachine from "../../assets/washing-machine.svg";
import { useDispatch } from "react-redux";
import { changeScreen } from "../../redux/actions";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import MapView, { Circle, Marker, Callout } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SliderBox } from "react-native-image-slider-box";
import { render } from "react-dom";
import { ProductCard } from "./components";
const Stack = createStackNavigator();

const products = [
  {
    id: 1,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
    detail: ["Regular Fit", "100% Cotton", "Design Unisex"],
    sizes: [
      { small: "S" },
      { medium: "M" },
      { large: "L" },
      { extra_large: "XL" },
    ],
    images: [
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "red",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "blue",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
    detail: ["Regular Fit", "100% Cotton", "Design Unisex"],
    sizes: [
      { small: "S" },
      { medium: "M" },
      { large: "L" },
      { extra_large: "XL" },
    ],
    images: [
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "red",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "blue",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
    detail: ["Regular Fit", "100% Cotton", "Design Unisex"],
    sizes: [
      { small: "S" },
      { medium: "M" },
      { large: "L" },
      { extra_large: "XL" },
    ],
    images: [
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "red",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "blue",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
    detail: ["Regular Fit", "100% Cotton", "Design Unisex"],
    sizes: [
      { small: "S" },
      { medium: "M" },
      { large: "L" },
      { extra_large: "XL" },
    ],
    images: [
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "red",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "blue",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
    detail: ["Regular Fit", "100% Cotton", "Design Unisex"],
    sizes: [
      { small: "S" },
      { medium: "M" },
      { large: "L" },
      { extra_large: "XL" },
    ],
    images: [
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "red",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "blue",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
    detail: ["Regular Fit", "100% Cotton", "Design Unisex"],
    sizes: [
      { small: "S" },
      { medium: "M" },
      { large: "L" },
      { extra_large: "XL" },
    ],
    images: [
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "red",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "blue",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
    detail: ["Regular Fit", "100% Cotton", "Design Unisex"],
    sizes: [
      { small: "S" },
      { medium: "M" },
      { large: "L" },
      { extra_large: "XL" },
    ],
    images: [
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "red",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "blue",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
    detail: ["Regular Fit", "100% Cotton", "Design Unisex"],
    sizes: [
      { small: "S" },
      { medium: "M" },
      { large: "L" },
      { extra_large: "XL" },
    ],
    images: [
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "red",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "blue",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
    ],
  },
  {
    id: 9,
    name: "Shirt",
    h: windowHeight / 6,
    w: windowWidth / 3,
    stars: 30,
    sign: "$",
    cost: 4.99,
    detail: ["Regular Fit", "100% Cotton", "Design Unisex"],
    sizes: [
      { small: "S" },
      { medium: "M" },
      { large: "L" },
      { extra_large: "XL" },
    ],
    images: [
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "red",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
      {
        uri: "https://i2.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/YOTEE-2020-Summer-cotton-fashion-casual-t-shirt-personal-company-group-custom-short-sleeved-LOGO-custom-2.png?fit=801%2C801&ssl=1",
        color: "blue",
        description: "Red Tshirt",
        texture:
          "https://thumbs.dreamstime.com/b/red-stripes-pattern-vector-striped-background-stripe-seamless-texture-fabric-geometric-lines-design-158665164.jpg",
      },
    ],
  },
];
export function ShopDiscoverScreen() {
  const [filterValue, setFilterValue] = useState("All");
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const renderProduct = ({ item }) => (
    <ProductCard
      name={item.name}
      h={item.h}
      w={item.w}
      stars={item.stars}
      sign={item.sign}
      cost={item.cost}
      details={item.detail}
      sizes={item.sizes}
      images={item.images}
    />
  );
  useFocusEffect(() => {
    dispatch(changeScreen("Shop Discover"));
  });
  const [searchText, setSearchText] = useState("");

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
          width: windowWidth / 1.2,
          marginBottom: windowHeight / 30,
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.primaryFont,
            color: Theme.darkText,
            fontSize: windowWidth / 19,
          }}
        >
          Discover
        </Text>
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.mdDark,
            fontSize: windowWidth / 27,
          }}
        >
          Explore your clothes here
        </Text>
      </View>

      <View
        style={{
          height: windowHeight / 19,
          backgroundColor: Theme.primaryBG,
          width: windowWidth / 1.3,
          borderRadius: windowWidth / 50,
        }}
      >
        <TextInput
          placeholder="Search anything here"
          onChangeText={(text) => {
            setSearchText(text);
          }}
        />
      </View>

      <View>
        <View style={{ height: windowHeight / 1.4 }}>
          <FlatList
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "center",
              alignItems: "center",
              height: windowHeight / 5,
            }}
            data={products}
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
        </View>
      </View>
    </View>
  );
}
// AIzaSyBrCRMGJ1e-qxRY7bz5pSSzucfAWMZamws
