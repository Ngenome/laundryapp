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
import { Entypo, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import MapView, { Circle, Marker, Callout } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SliderBox } from "react-native-image-slider-box";
import { render } from "react-dom";
import { ProductCard } from "./components";
const Stack = createStackNavigator();
import { products } from "../../api/dummy";
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            placeholder="Search anything here"
            onChangeText={(text) => {
              setSearchText(text);
            }}
          />
          <TouchableOpacity
            style={{
              padding: windowWidth / 80,
            }}
            onPress={() => {}}
          >
            <FontAwesome
              name="search"
              color={Theme.icons.secondary}
              size={windowHeight / 30}
            />
          </TouchableOpacity>
        </View>
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
