import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { IconSelector } from "../components";
import { changeDrawerScreen, LOGOUT } from "../redux/actions";
import { windowHeight, windowWidth } from "../styles";
import { Theme } from "../theme";
import { POD } from "../helper_functions";
const DrawerWidth = windowWidth / 2.2;
const IconSize = windowWidth / 20;
const IconComponentMargin = windowHeight / 40;
export function DrawerModalScreen({ navigation }) {
  const dispatch = useDispatch();
  const activeScreen = useSelector((state) => state.drawerScreen);
  const auth = useSelector((state) => state.auth);
  function colorResolver(i) {
    return activeScreen == i ? Theme.secondary : Theme.primary;
  }
  return (
    <View style={{ flex: 1, backgroundColor: Theme.backgrounds.primaryBG }}>
      <View
        style={{
          width: DrawerWidth,
          backgroundColor: Theme.backgrounds.primaryBG,
          flex: 1,
        }}
      >
        <SafeAreaView>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: DrawerWidth,
            }}
          >
            <View></View>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons
                name="close"
                color={Theme.primary}
                size={windowWidth / 12}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              width: DrawerWidth,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <IconNameComponent
              styles={{
                marginTop: IconComponentMargin,
              }}
              iconName="home"
              family="materialcommunityicons"
              iconSize={IconSize}
              name="Home"
              width={DrawerWidth / 1.2}
              iconColor={colorResolver("home")}
              onPress={() => {
                dispatch(changeDrawerScreen("home"));
              }}
            />
            <IconNameComponent
              styles={{
                marginTop: IconComponentMargin,
              }}
              iconName="user-alt"
              family="Fontawesome5"
              iconSize={IconSize}
              name="Profile"
              width={DrawerWidth / 1.2}
              iconColor={colorResolver("profile")}
              onPress={() => {
                dispatch(changeDrawerScreen("profile"));
              }}
            />
            <IconNameComponent
              styles={{
                marginTop: IconComponentMargin,
              }}
              iconName="shop"
              family="Entypo"
              iconSize={IconSize}
              name="Shop"
              width={DrawerWidth / 1.2}
              iconColor={colorResolver("shop")}
              onPress={() => {
                dispatch(changeDrawerScreen("shop"));
                navigation.navigate("shop");
              }}
            />
            <IconNameComponent
              styles={{
                marginTop: IconComponentMargin,
              }}
              iconName="headphones"
              family="Fontawesome5"
              iconSize={IconSize}
              name="Support"
              width={DrawerWidth / 1.2}
              iconColor={colorResolver("support")}
              onPress={() => {
                dispatch(changeDrawerScreen("support"));
                navigation.navigate("help");
              }}
            />

            <View
              style={{
                width: DrawerWidth / 1.2,
                marginTop: windowHeight / 1.66,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("contact");
                }}
              >
                <Text
                  style={{
                    color: Theme.lightDark,
                    fontFamily: Theme.fonts.nunito,
                    fontSize: windowWidth / 23,
                  }}
                >
                  Contact us
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("how");
                }}
              >
                <Text
                  style={{
                    color: Theme.lightDark,
                    fontFamily: Theme.fonts.nunito,
                    fontSize: windowWidth / 23,
                  }}
                >
                  How it works
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  {
                    auth.loggedIn
                      ? dispatch(LOGOUT)
                      : navigation.navigate("Login");
                  }
                }}
              >
                <Text
                  style={{
                    color: Theme.secondary,
                    fontFamily: Theme.fonts.nunito,
                    fontSize: windowWidth / 23,
                  }}
                >
                  {auth.loggedIn ? "Log out" : "Log in"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <StatusBar style="dark" />
      </View>
    </View>
  );
}
const IconNameComponent = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={{ ...props.styles }}>
      <View
        style={{
          flexDirection: "row",
          width: props.width,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            marginRight: props.width / 9,
          }}
        >
          <IconSelector
            name={props.iconName}
            family={props.family}
            size={props.iconSize}
            color={props.iconColor}
          />
        </View>
        <Text
          style={{
            color: props.iconColor,
            fontFamily: Theme.fonts.nunito,
            fontSize: POD(props.fontSize, windowWidth / 23),
          }}
        >
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
