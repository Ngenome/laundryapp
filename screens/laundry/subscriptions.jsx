import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { windowWidth } from "../../styles";
import { Theme } from "../../theme";
export default function SubscriptionsScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView>
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
              color={Theme.icons.dark}
              size={windowWidth / 20}
            />
          </TouchableOpacity>
          <View
            style={{
              width: windowWidth / 1.7,
            }}
          >
            <Text
              style={{
                color: Theme.darkText,
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                fontSize: windowWidth / 20,
                textAlign: "center",
              }}
            >
              Subscriptions
            </Text>
            <Text
              style={{
                color: Theme.mdDark,
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                fontSize: windowWidth / 20,
                textAlign: "center",
              }}
            >
              Please select your prefered package
            </Text>
          </View>
        </View>
        <View>
          {subscriptions.map((item, index) => {
            return <SubscriptionView title="Ribrad Basic" />;
          })}
        </View>
      </SafeAreaView>
    </View>
  );
}
function SubscriptionView(props) {
  return (
    <View>
      <View>
        <Text
          style={{
            color: Theme.secondary,
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            fontSize: windowWidth / 15,
            textAlign: "center",
          }}
        >
          {props.title.toUppercase()}
        </Text>
        <Text
          style={{
            color: Theme.secondary,
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            fontSize: windowWidth / 20,
          }}
        >
          {props.sign} {props.cost}/{props.timeinterval}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: Theme.secondary,
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            fontSize: windowWidth / 20,
          }}
        >
          {props.description}
        </Text>
      </View>
    </View>
  );
}
