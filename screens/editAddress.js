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
  Touchable,
} from "react-native";
import Checkbox from "expo-checkbox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../theme";
import AppLoading from "expo-app-loading";
import { useEffect, useRef, useState } from "react";
import { BButton, CenteredButton, FButton, IconInput } from "../components";
import { styles, windowHeight, windowWidth } from "../styles";

import { createStackNavigator } from "@react-navigation/stack";

import { useDispatch } from "react-redux";
import { changeScreen } from "../redux/actions";
import { Entypo, Feather, MaterialIcons } from "@expo/vector-icons";
import MapView, { Circle, Marker, Callout } from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const Stack = createStackNavigator();

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
        key: "",
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
  const placesRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useFocusEffect(() => {
    dispatch(changeScreen("Edit Address"));
  });
  useEffect(() => {
    placesRef.current?.setAddressText("Some Text");
  }, []);

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
      <GooglePlacesInput ref={placesRef} />
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

      <View
        style={{
          height: windowHeight / 1.5,
          backgroundColor: Theme.backgrounds.primaryBG,
          borderTopLeftRadius: windowWidth / 20,
          borderTopRightRadius: windowWidth / 20,
          elevation: 20,
          width: windowWidth,
          position: "relative",
          alignItems: "center",

          bottom: windowHeight / 65,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_700Bold,
              color: Theme.secondary,
              fontSize: windowWidth / 23,
              marginTop: windowHeight / 40,
              textAlign: "center",
            }}
          >
            Your addresses
          </Text>
          <View>
            <AddressInput
              title="Pick up"
              address="Dalassy 12 House 22"
              onPress={() => {
                placesRef.current?.focus();
              }}
            />
            <AddressInput
              title="Drop off"
              address="Chakra  street House 22"
              onPress={() => {
                placesRef.current?.focus();
              }}
            />
          </View>

          <CenteredButton
            hRatio={18}
            wRatio={1.72}
            style={{
              marginTop: windowHeight / 14,
              alignSelf: "center",
              elevation: 10,
            }}
            radiusRatio={18}
            left={
              <Feather
                name="truck"
                color={Theme.foregroundOnColoredViews}
                size={windowWidth / 20}
                style={{
                  marginHorizontal: windowWidth / 30,
                }}
              />
            }
            title="Save addresses"
            bgColor={Theme.secondary}
            onPress={() => {
              // setModalVisible(true);
            }}
          />
        </View>
      </View>
    </View>
  );
}

// AIzaSyBrCRMGJ1e-qxRY7bz5pSSzucfAWMZamws

const AddressInput = (props) => {
  return (
    <View
      style={{
        marginVertical: windowHeight / 60,
      }}
    >
      <Text
        style={{
          fontFamily: Theme.fonts.Nunito_700Bold,
          color: Theme.lightDark,
          fontSize: windowWidth / 23,
          marginBottom: windowHeight / 90,
        }}
      >
        {props.title}
      </Text>
      <View
        style={{
          width: windowWidth / 1.2,
          height: windowHeight / 20,
          backgroundColor: Theme.backgrounds.primaryBG,
          // elevation: 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          borderRadius: windowWidth / 40,
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.darkText,
            fontSize: windowWidth / 23,
            marginBottom: windowHeight / 90,
            margin: 2,
          }}
        >
          {props.address}
        </Text>
        <TouchableOpacity onPress={props.onPress}>
          <Feather
            name="edit"
            color={Theme.icons.secondary}
            size={windowWidth / 20}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
