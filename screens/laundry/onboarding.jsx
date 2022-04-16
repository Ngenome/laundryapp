import { AntDesign } from "@expo/vector-icons";
import { windowHeight, windowWidth } from "../../styles";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Theme } from "../../theme";

import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
export default function LaundryOnboarding() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={Theme.gradientColors}
        style={{
          flex: 1,
          width: windowWidth,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: windowHeight / 15,
            width: windowWidth / 1.2,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign
              name="arrowleft"
              color={Theme.primary}
              size={windowWidth / 20}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: Theme.primary,
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              fontSize: windowWidth / 26,
              textAlign: "center",
            }}
          >
            Welcome to
          </Text>
          <Text
            style={{
              color: Theme.primary,
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              fontSize: windowWidth / 20,
              textAlign: "center",
            }}
          >
            RIBRAD LAUNDRY
          </Text>
          <View>
            <Text
              style={{
                color: Theme.primary,
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                fontSize: windowWidth / 26,
                textAlign: "center",
              }}
            >
              Please tell us how you want us to serve you
            </Text>
            <View style={{ marginVertical: windowHeight / 30 }}>
              <LaundryServiceItem
                serviceTitle="Home Delivery"
                serviceDescription="Schedule a pickup and delivery and we will take care of your laundry"
                iconUri="https://static.vecteezy.com/system/resources/thumbnails/001/952/577/small_2x/delivery-service-truck-vehicle-icon-free-vector.jpg"
              />
              <LaundryServiceItem
                serviceTitle="Subscriptions"
                serviceDescription="Take a look at our subscription plans and make huge savings"
                iconUri="https://static.vecteezy.com/system/resources/thumbnails/001/952/577/small_2x/delivery-service-truck-vehicle-icon-free-vector.jpg"
              />
            </View>
            <CenteredButton
              hRatio={20}
              wRatio={2}
              style={{
                marginHorizontal: windowHeight / 34,
              }}
              radiusRatio={20}
              title="Get started"
              bgColor={Theme.secondary}
              onPress={() => {}}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const LaundryServiceItem = (props) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: Theme.primary,
        width: windowWidth / 1.2,
        height: windowHeight / 10,
        flexDirection: Rowdies_300Light,
        justifyContent: "center",
      }}
    >
      <View>
        <Image
          source={{ uri: props.iconUri }}
          style={{
            height: windowHeight / 12,
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          width: windowWidth / 2.1,
        }}
      >
        <Text
          style={{
            color: Theme.primary,
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            fontSize: windowWidth / 26,
            textAlign: "center",
          }}
        >
          {props.serviceTitle}
        </Text>
        <Text
          style={{
            color: Theme.primary,
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            fontSize: windowWidth / 26,
            textAlign: "center",
          }}
        >
          {props.serviceDescription}
        </Text>
      </View>
    </View>
  );
};
