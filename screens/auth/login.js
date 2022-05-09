import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import Checkbox from "expo-checkbox";
import {
  GOOGLE_ANDROID_OAUTH_ID,
  GOOGLE_IOS_OAUTH_ID,
  GOOGLE_EXPO_OAUTH_ID,
} from "@env";
import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../../theme";
import AppLoadSvgComponenting from "expo-app-loading";
import React, { useEffect, useState } from "react";
import { BButton, FButton, IconInput } from "../../components";
import { styles, windowHeight, windowWidth } from "../../styles";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { Nunito_400Regular } from "@expo-google-fonts/nunito";
import { LOGIN } from "../../redux/actions";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

const Stack = createStackNavigator();
const redirectUri = AuthSession.makeRedirectUri({
  useProxy: false,
});

export default function LoginScreen() {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const dispatch = useDispatch();
  const screen = useSelector((state) => state.change);
  const nextScreen = useSelector((state) => state.nextScreen);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: GOOGLE_ANDROID_OAUTH_ID,
    iosClientId: GOOGLE_IOS_OAUTH_ID,
    expoClientId: GOOGLE_EXPO_OAUTH_ID,
    webClientId: GOOGLE_EXPO_OAUTH_ID,
  });
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  React.useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      console.log("successful google login");
      navigation.navigate(nextScreen);
    } else {
      console.log(response?.type);
      navigation.navigate(nextScreen);
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
      console.log(userInfo);
      navigation.navigate("Laundry");
    });
  }

  useEffect(() => {
    console.log(screen);
  }, []);
  const navigation = useNavigation();
  const [remember, setRemember] = useState(false);

  function AuthSuccess() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          navigation.navigate("Laundry");
        }}
      >
        {userInfo ? (
          <View
            style={{
              height: windowHeight * 0.8,
              width: windowWidth * 0.9,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{}}>
              <Image
                source={{ uri: userInfo.picture }}
                style={styles.profilePic}
              />
              <Text>Welcome {userInfo.name}</Text>
              <Text>{userInfo.email}</Text>
            </View>
          </View>
        ) : (
          <></>
        )}
      </Modal>
    );
  }
  return (
    <View
      style={[
        styles.container,
        {
          fontFamily: "Nunito_400Regular",
        },
      ]}
    >
      <AuthSuccess />
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
            source={require("../../assets/icon.png")}
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
              change={(text) => {
                setUsername(text);
              }}
            />
            <IconInput
              fontFamily={Theme.fonts.nunito}
              name="lock"
              iconColor="red"
              family="materialicons"
              don
              iconSize={windowWidth / 15}
              placeholder="Type your Password"
              TextInput={{
                secureTextEntry: !passwordVisible,
                textContentType: "password",
              }}
              visibilityIcon
              visibility={passwordVisible}
              setVisibility={setPasswordVisible}
              change={(text) => {
                setPassword(text);
              }}
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
        <Text
          style={{
            color: Theme.colors.errorColor,
            fontFamily: Theme.fonts.nunito,
            fontSize: 10,
            marginLeft: 13,
          }}
        >
          {validationError}
        </Text>
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
            if (password === null) {
              setValidationError("The password field cannot be empty");
            } else if (
              PasswordValidator(password, username, setValidationError)
            ) {
              dispatch(
                LOGIN({
                  username: "Taylor",
                  token: "12324546935",
                })
              );
              navigation.navigate("Home");
            }
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: Theme.lightDark,

            fontFamily: Theme.fonts.nunito,
            fontSize: 12,
            marginLeft: 13,
          }}
        >
          or Sign in with
        </Text>
        <View>
          <TouchableOpacity
            onPress={
              accessToken
                ? getUserData
                : () => {
                    promptAsync({ redirectUri });
                  }
            }
          >
            <Image
              source={require("../../assets/google.png")}
              style={{
                width: windowWidth / 11,
                height: windowHeight / 10,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
        </View>
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("signup");
          }}
        >
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

function PasswordValidator(password, username, setError) {
  if (password.length < 6) {
    setError("Error: Password must contain at least six characters!");
    //form.pwd1.focus();
    return false;
  }
  if (password == username) {
    setError("Error: Password must be different from Username!");
    //form.pwd1.focus();
    return false;
  }
  var re = /[0-9]/;
  if (!re.test(password)) {
    setError("Error: password must contain at least one number (0-9)!");
    //form.pwd1.focus();
    return false;
  }
  re = /[a-z]/;
  if (!re.test(password)) {
    setError(
      "Error: password must contain at least one lowercase letter (a-z)!"
    );
    //form.pwd1.focus();
    return false;
  }
  re = /[A-Z]/;
  if (!re.test(password)) {
    setError(
      "Error: password must contain at least one uppercase letter (A-Z)!"
    );
    //form.pwd1.focus();
    return false;
  }
  setError("");
  return true;
}
