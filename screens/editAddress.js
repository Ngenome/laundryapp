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
import MapView, { Circle, Marker, Callout } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const Stack = createStackNavigator();
// "AIzaSyBrCRMGJ1e-qxRY7bz5pSSzucfAWMZamws",
const GooglePlacesInput = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      fetchDetails={true}
      GooglePlacesSearchQuery={{
        rankby: "distance",
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        setRegion({
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }}
      query={{
        key: "AIzaSyCUQoLbBsZz1WWOIQKro8Kx8rzZuZyRPyo",
        language: "en",
        components: "country:us",
        types: "establishment",
        radius: 30000,
        location: `${region.latitude}, ${region.longitude}`,
      }}
      styles={{
        container: {
          flex: 0,
          position: "absolute",
          width: "100%",
          zIndex: 100,
        },
        listView: { backgroundColor: "white" },
      }}
    />
  );
};

export function EditAddress() {
  const [pin, setPin] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useFocusEffect(() => {
    dispatch(changeScreen("Edit Address"));
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
          fontFamily: Theme.fonts.secondary,
          color: Theme.secondary,
          fontSize: Theme.sizes.mdText,
        }}
      >
        Please enter your address
      </Text>
      <GooglePlacesInput />
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          height: windowHeight / 3,
          width: windowWidth,
        }}
      >
        <Marker
          draggable={true}
          onDragStart={(e) => {
            console.log(e.nativeEvent.coordinates);
          }}
          onDragEnd={(e) => {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
          }}
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          pinColor="red"
        >
          <Callout>
            <Text>Your Location</Text>
          </Callout>
        </Marker>
        <Circle center={pin} radius={300} />
      </MapView>
    </View>
  );
}

// AIzaSyBrCRMGJ1e-qxRY7bz5pSSzucfAWMZamws
