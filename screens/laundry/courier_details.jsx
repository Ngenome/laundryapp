import React from "react";
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { View, Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowHeight, windowWidth } from "../../styles";
import { Theme } from "../../theme";
import appearance from "../constants/appearance";
import colors from "../../theme/colors";
import FromToLocationView from "../../components/courier/tracker";

export default function CourierDetails() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <FromToLocationView />
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          height: windowHeight / 3,
          width: windowWidth / 1,
          borderRadius: windowWidth / 20,
        }}
      >
        <Marker
          style={{
            height: windowHeight / 3,
          }}
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
      </MapView>
      <View
        style={{
          marginTop: windowHeight / 20,
          flexDirection: "row",
          justifyContent: "space-between",
          width: windowWidth / 1.2,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              color: colors[appearance].text,
              fontSize: Theme.sizes.mdText,
            }}
          >
            Suzuki Alto
          </Text>
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_700Bold,
              color: Theme.secondary,
              fontSize: Theme.sizes.mdText + 1,
            }}
          >
            No. KDB 339G
          </Text>
        </View>
        <View
          style={{
            backgroundColor: colors[appearance].viewBackground,
            width: windowWidth / 6,
            height: windowHeight / 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_700Bold,
              color: colors[appearance].danger,
              fontSize: Theme.sizes.mdText + 1,
            }}
          >
            RED
          </Text>
        </View>
      </View>
      <View
        style={{
          width: windowWidth / 1.2,
          marginTop: windowHeight / 30,
        }}
      >
        <CourierTimeTracker
          initial={true}
          location="Nairobi CBD"
          date="18 May 2022"
          time="10:32"
          icon={
            <AntDesign
              name="caretdown"
              size={24}
              color={Theme.icons.tertiary}
            />
          }
        />
        <CourierTimeTracker
          location="Allsopps"
          date="18 May 2022"
          time="10:52"
          icon={
            <AntDesign
              name="caretdown"
              size={24}
              color={Theme.icons.tertiary}
            />
          }
        />
        <CourierTimeTracker
          final={true}
          location="TRM Drive"
          date="18 May 2022"
          time="11:02"
          icon={
            <AntDesign
              name="caretdown"
              size={24}
              color={Theme.icons.tertiary}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}
const CourierTimeTracker = (props) => {
  return (
    <View
      style={{
        marginBottom: windowHeight / 20,
        flexDirection: props.initial || props.final ? "row" : "row",
      }}
    >
      {props.initial ? (
        <AntDesign name="caretdown" size={windowWidth / 15} color={"orange"} />
      ) : props.final ? (
        <MaterialIcons
          name="location-pin"
          color={colors[appearance].tint}
          size={windowWidth / 15}
        />
      ) : (
        <MaterialCommunityIcons
          name="dots-vertical"
          color={"orange"}
          size={windowWidth / 15}
        />
      )}
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_700Bold,
            color: colors[appearance].text,
            fontSize: Theme.sizes.mdText + 1,
          }}
        >
          {props.location}
        </Text>
        <View
          style={{
            width: windowWidth / 1.3,
            flexDirection: "row",

            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_700Bold,
              color: colors[appearance].tint,
              fontSize: Theme.sizes.mdText - 1,
            }}
          >
            {props.date}
          </Text>
          <Text
            style={{
              fontFamily: Theme.fonts.nunito,
              color: Theme.mdDark,
              fontSize: Theme.sizes.mdText + 1,
            }}
          >
            {props.time} {"AM"}
          </Text>
        </View>
      </View>
    </View>
  );
};
