import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import Checkbox from "expo-checkbox";

import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../theme";
import AppLoadSvgComponenting from "expo-app-loading";
import { useEffect, useState } from "react";
import { BButton, FButton, IconInput } from "../components";
import { styles, windowHeight, windowWidth } from "../styles";
import SvgComponent from "../assets/logo2";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { LOGIN } from "../redux/actions";

import { KeyboardAvoider } from "rn-keyboard-avoider";
const Stack = createStackNavigator();

export default function LoginScreen() {
  const dispatch = useDispatch();
  const screen = useSelector((state) => state.change);
  useEffect(() => {
    console.log(screen);
  }, []);
  const navigation = useNavigation();
  const [remember, setRemember] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {
          fontFamily: "Nunito_400Regular",
        },
      ]}
    >
      <LinearGradient
        colors={Theme.gradientColors}
        style={styles.splitGradient}
      >
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            // flex: 0.4,
            height: windowHeight / 2.4,
            width: windowWidth,
          }}
        >
          <Image
            source={require("../assets/icon.png")}
            style={{ height: windowHeight / 3.5, width: windowHeight / 3.5 }}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FButton
              title="LOGIN"
              bg
              bgColor={Theme.tertiary}
              family={Theme.fonts.Nunito_600SemiBold}
              fontSize={windowWidth / 24}
            />
            <FButton
              title="SIGN UP"
              family={Theme.fonts.Nunito_600SemiBold}
              fontSize={windowWidth / 24}
              onPress={() => {
                navigation.navigate("signup");
              }}
            />
          </View>
        </View>
      </LinearGradient>

      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <KeyboardAvoidingView>
          <View
            style={{
              marginTop: 36,
            }}
          >
            <IconInput
              name="user"
              family="fontawesome"
              iconSize={windowWidth / 15}
              placeholder="Enter your username"
              fontFamily={Theme.fonts.nunito}
            />
            <IconInput
              name="lock"
              family="materialicons"
              iconSize={windowWidth / 15}
              placeholder="Enter your Password"
              fontFamily={Theme.fonts.nunito}
            />
            <TouchableOpacity style={{}}>
              <Text
                style={{
                  color: Theme.tertiary,
                  alignSelf: "flex-end",
                  fontFamily: Theme.fonts.nunito,
                  fontSize: 12,
                }}
              >
                Forgot your Password?
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Checkbox
            value={remember}
            onValueChange={setRemember}
            style={{
              ...styles.checkbox,
            }}
            color={remember ? Theme.icons.success : undefined}
          />
          <Text
            style={{
              color: Theme.lightDark,

              fontFamily: Theme.fonts.nunito,
              fontSize: 12,
              marginLeft: 13,
            }}
          >
            Remember Me
          </Text>
        </View>
        <BButton
          onPress={() => {
            dispatch(
              LOGIN({
                username: "Taylor",
                token: "12324546935",
              })
            );
            navigation.navigate("Home");
          }}
          title="LOGIN"
          fontSize={17}
          bg
          family={Theme.fonts.Nunito_600SemiBold}
          bgColor={Theme.tertiary}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          width: windowWidth,
          justifyContent: "center",
          position: "relative",

          alignSelf: "baseline",
        }}
      >
        <Text
          style={{
            color: Theme.darkText,
            fontSize: windowWidth / 26,

            fontFamily: Theme.fonts.nunito,
          }}
        >
          Don't have an account?
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              color: Theme.tertiary,
              marginLeft: 2,
              marginBottom: 30,

              fontSize: windowWidth / 26,
              fontFamily: Theme.fonts.nunito,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
