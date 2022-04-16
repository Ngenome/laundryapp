import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowHeight, windowWidth } from "../../styles";
import { Theme } from "../../theme";

export default function CourierDetails() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{
          height: windowHeight / 3,
          width: windowWidth / 1.4,
          borderRadius: windowWidth / 20,
        }}
      >
        <View
          style={{
            height: windowHeight / 10,
            flexDirection: "row",
          }}
        >
          <View>
            <AntDesign name="caretdown" size={24} color={Theme.secondary} />
            <Entypo name="dots-three-vertical" color={Theme.secondary} />
            <Ionicons name="location" color={Theme.secondary} />
          </View>
          <View
            style={{
              width: windowWidth / 1.4,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                color: Theme.secondary,
                fontSize: Theme.sizes.mdText,
              }}
            >
              Nairobi CBD
            </Text>
          </View>
        </View>
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
          flexDirection: "row",
          justifyContent: "space-between",
          width: windowWidth / 1.2,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              color: Theme.secondary,
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
            backgroundColor: "red",
            width: windowWidth / 6,
            height: windowHeight / 20,
          }}
        >
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_700Bold,
              color: Theme.secondary,
              fontSize: Theme.sizes.mdText + 1,
            }}
          >
            RED
          </Text>
        </View>
      </View>
      <View>
        <CourierTimeTracker
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
      </View>
    </SafeAreaView>
  );
}
const CourierTimeTracker = (props) => {
  return (
    <View>
      {props.icon}
      <View>
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_700Bold,
            color: Theme.darkText,
            fontSize: Theme.sizes.mdText + 1,
          }}
        >
          {props.location}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_700Bold,
              color: Theme.darkText,
              fontSize: Theme.sizes.mdText + 1,
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
            {props.time}
          </Text>
        </View>
      </View>
    </View>
  );
};
