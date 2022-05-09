import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { HorizontalValueView, Rule } from "../../components";
import { changeScreen } from "../../redux/actions";
import { windowHeight, windowWidth } from "../../styles";
import { Theme } from "../../theme";
import { CenteredButton } from "../summary";

export default function CustomerPayments() {
  const dispatch = useDispatch();

  useFocusEffect(() => {
    dispatch(changeScreen("Payment History"));
  });
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,

        alignContent: "center",
        alignItems: "center",
      }}
    >
      <LinearGradient
        colors={Theme.gradientColors}
        style={{
          height: windowHeight / 3,
          width: windowWidth,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.primary,
            fontSize: Theme.sizes.smText + 5,
            textAlign: "center",
          }}
        >
          Customer payments
        </Text>
        <View
          style={{
            height: windowHeight / 6.5,
            width: windowWidth / 1.2,
            backgroundColor: Theme.primaryBG,
            borderRadius: windowWidth / 20,
            marginTop: windowHeight / 20,
            alignItems: "center",
          }}
        >
          <HorizontalValueView
            item="Total price"
            value={(80.0).toFixed(2)}
            money
            sign="$"
            w={windowWidth / 1.7}
          />
          <Rule bg={Theme.lightDark} mv={windowHeight / 50} />
          <HorizontalValueView
            item="Total price"
            value={(80.0).toFixed(2)}
            money
            sign="$"
            w={windowWidth / 1.7}
          />
          <Text
            style={{
              fontFamily: Theme.fonts.nunito,
              color: Theme.darkText,
              fontSize: Theme.sizes.smText,
              width: windowWidth / 1.5,
              marginLeft: windowWidth / 20,
              textAlign: "left",
            }}
          >
            Includes all fees paid by the customer for the services ordered
          </Text>
        </View>
      </LinearGradient>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: windowHeight / 2.7,
            marginTop: windowHeight / 20,
            width: windowWidth / 1.2,
            backgroundColor: Theme.primaryBG,
            borderRadius: windowWidth / 20,

            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              color: Theme.darkText,
              fontSize: Theme.sizes.mdText,

              marginLeft: windowWidth / 20,
            }}
          >
            Customer Payments
          </Text>
          <HorizontalValueView
            item="Service fee"
            value={(5.23).toFixed(2)}
            money
            sign="$"
            w={windowWidth / 1.7}
          />
          <Rule bg={Theme.lightDark} mv={windowHeight / 50} />

          <HorizontalValueView
            item="Delivery fee"
            value={(80.0).toFixed(2)}
            money
            w={windowWidth / 1.7}
            sign="$"
          />
          <Text
            style={{
              fontFamily: Theme.fonts.nunito,
              color: Theme.darkText,
              fontSize: Theme.sizes.smText,
              width: windowWidth / 1.5,
              marginLeft: windowWidth / 20,
            }}
          >
            Delivery fees varies according to distance
          </Text>
          <HorizontalValueView
            item="Discount"
            value={(10.0).toFixed(2)}
            money
            sign="$"
            w={windowWidth / 1.7}
          />
          <Rule bg={Theme.lightDark} mv={windowHeight / 50} />
          <HorizontalValueView
            item="Total"
            value={(187.3).toFixed(2)}
            money
            sign="$"
            w={windowWidth / 1.7}
          />
          <Text
            style={{
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              color: Theme.darkText,
              fontSize: Theme.sizes.smText,
              width: windowWidth / 1.5,
              marginLeft: windowWidth / 20,
            }}
          >
            Includes all fees paid by the customer for the services
            ordered,service fee, delivery fee and discounts
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
