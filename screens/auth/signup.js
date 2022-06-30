import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Checkbox from "expo-checkbox";

import { LinearGradient } from "expo-linear-gradient";
import { Theme } from "../../theme";
import AppLoading from "expo-app-loading";
import React, { useEffect, useRef, useState } from "react";
import {
  BButton,
  FButton,
  IconInput,
  PhoneNumberInput,
} from "../../components";
import { styles, windowHeight, windowWidth } from "../../styles";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
WebBrowser.maybeCompleteAuthSession();

import {
  GOOGLE_ANDROID_OAUTH_ID,
  GOOGLE_IOS_OAUTH_ID,
  GOOGLE_EXPO_OAUTH_ID,
} from "@env";
import { useDispatch, useSelector } from "react-redux";

const Stack = createStackNavigator();
const redirectUri = AuthSession.makeRedirectUri({
  useProxy: false,
});

export default function SignUpScreen() {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();
  const navigation = useNavigation();
  const [fullName, setFullName] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [formattedPhoneNumber, setFormattedPhoneNumber] = useState(null);
  const [location, setLocation] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneValid, setPhoneValid] = useState(null);
  const phoneInputRef = useRef(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: GOOGLE_ANDROID_OAUTH_ID,
    iosClientId: GOOGLE_IOS_OAUTH_ID,
    expoClientId:
      "359720046968-g76b82nqm0205cvth3kfm8qp26mrkfr2.apps.googleusercontent.com",
    webClientId:
      "359720046968-g76b82nqm0205cvth3kfm8qp26mrkfr2.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      console.log(accessToken);
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
      dispatch(
        LOGIN({
          username: "Tayluor",
          token: "12324546935",
        })
      );
    });
  }

  const dispatch = useDispatch();
  const screen = useSelector((state) => state.change);
  useEffect(() => {
    console.log(screen);
  }, []);

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
  function ValidatePassword() {
    if (password != null && password.length < 6) {
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
  useEffect(() => {
    if (password && username) {
      ValidatePassword();
    }
  }, [password, username]);
  useEffect(() => {
    if (password) {
      if (confirmPassword !== password) {
        setPasswordsMatch(false);
      } else {
        setPasswordsMatch(true);
      }
    }
  }, [confirmPassword, password]);
  //check if the phone number is vaild every time the user types
  useEffect(() => {
    setPhoneValid(phoneInputRef.current?.isValidNumber(phoneNumber));
  }, [phoneNumber]);
  return (
    <View style={styles.container}>
      <View colors={Theme.gradientColors} style={styles.splitGradient}>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            height: windowHeight / 3.9,
            width: windowWidth,
          }}
        >
          <Image
            source={require("../../assets/icon.png")}
            style={{ height: windowHeight / 6.0, width: windowHeight / 6.0 }}
          />
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <FButton
              title="LOGIN"
              family={Theme.fonts.Nunito_600SemiBold}
              fontSize={windowWidth / 24}
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
            <FButton
              family={Theme.fonts.Nunito_600SemiBold}
              title="SIGN UP"
              fontSize={windowWidth / 24}
              bg
              color={Theme.foregroundOnColoredViews}
              bgColor={Theme.secondary}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            marginTop: 6,
          }}
        >
          <IconInput
            fontFamily={Theme.fonts.nunito}
            name="user"
            family="fontawesome"
            iconSize={windowWidth / 15}
            placeholder="Full name"
            TextInput={{
              secureTextEntry: false,
            }}
            change={(text) => {
              setFullName(text);
            }}
          />

          <IconInput
            fontFamily={Theme.fonts.nunito}
            name="user"
            family="fontawesome"
            iconSize={windowWidth / 15}
            placeholder="Enter a  username"
            TextInput={{
              secureTextEntry: false,
            }}
            change={(text) => {
              setUsername(text);
              ValidatePassword();
            }}
          />

          <PhoneNumberInput
            fontFamily={Theme.fonts.nunito}
            name="phone"
            family="feather"
            iconSize={windowWidth / 15}
            placeholder="Mobile/phone number"
            TextInput={{
              secureTextEntry: false,
              keyboardType: "phone-pad",
            }}
            change={(text) => {
              setPhoneNumber(text);
            }}
            changeFormatted={(text) => {
              setFormattedPhoneNumber(text);
            }}
            phoneInputRef={phoneInputRef}
            default=""
            onChangeCountry={(text) => setCountryCode(text)}
          />
          <Text
            style={{
              color: phoneValid ? Theme.icons.success : Theme.colors.errorColor,
              fontFamily: Theme.fonts.nunito,
              fontSize: 10,
            }}
          >
            {phoneValid
              ? "Phone number is valid"
              : phoneValid == null
              ? ""
              : "phone number is invalid!"}
          </Text>
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
              ValidatePassword();
              if (confirmPassword !== password) {
                setPasswordsMatch(false);
              } else {
                setPasswordsMatch(true);
              }
            }}
          />

          <IconInput
            fontFamily={Theme.fonts.nunito}
            name="lock"
            iconColor="red"
            family="materialicons"
            iconSize={windowWidth / 15}
            placeholder="Confirm your Password"
            TextInput={{
              secureTextEntry: !passwordVisible,
              textContentType: "password",
            }}
            change={(text) => {
              setConfirmPassword(text);
            }}
          />
          <Text
            style={{
              color: passwordsMatch
                ? Theme.icons.success
                : Theme.colors.errorColor,
              fontFamily: Theme.fonts.nunito,
              fontSize: 10,
            }}
          >
            {passwordsMatch
              ? "Passwords Match"
              : passwordsMatch == null
              ? ""
              : "Passwords don't match!"}
          </Text>
          <IconInput
            fontFamily={Theme.fonts.nunito}
            name="location-pin"
            iconColor="red"
            family="Entypo"
            iconSize={windowWidth / 15}
            placeholder="Select Location"
            TextInput={{
              secureTextEntry: false,
            }}
            change={(text) => {
              setLocation(text);
            }}
          />
        </View>
        <Text
          style={{
            color: Theme.colors.errorColor,
            fontFamily: Theme.fonts.nunito,
            fontSize: 10,
          }}
        >
          {error}
        </Text>

        <BButton
          onPress={() => {
            navigation.navigate("Home");
          }}
          family={Theme.fonts.Nunito_600SemiBold}
          title="SIGN UP"
          bg
          bgColor={Theme.secondary}
        />
      </View>
      <View
        style={{
          marginVertical: 0,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: Theme.lightDark,

            fontFamily: Theme.fonts.nunito,
            fontSize: 12,
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
            fontSize: 15,
            fontFamily: Theme.fonts.nunito,
          }}
        >
          Have an account?
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: Theme.fonts.nunito,
              color: Theme.secondary,
              marginLeft: 2,
            }}
          >
            Log in
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
