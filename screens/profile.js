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

import { Theme } from "../theme";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { BButton, FButton, IconInput } from "../components";
import { styles, windowHeight, windowWidth } from "../styles";

import { createStackNavigator } from "@react-navigation/stack";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { changeScreen } from "../redux/actions";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();

  useFocusEffect(() => {
    dispatch(changeScreen("Profile"));
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ebebeb",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={[
            styles.flexRow,
            {
              width: windowWidth / 1.2,
              marginBottom: 5,
            },
          ]}
        >
          <Text
            style={{
              color: Theme.secondary,
              fontSize: 28,
              fontFamily: "Nunito_600SemiBold",
            }}
          >
            Josh Omido
          </Text>
          <Image
            source={{
              uri: "https://media-exp1.licdn.com/dms/image/C4D03AQF0lTK8c0nRMQ/profile-displayphoto-shrink_200_200/0/1637662257665?e=1653523200&v=beta&t=pNsKj6Cw8gSFCmGtRleCSmNkbAQcYABNVVtS1r47TCE",
            }}
            style={{
              height: windowHeight / 10,
              width: windowHeight / 10,
              borderRadius: windowHeight / 20,
            }}
          />
        </View>
      </View>
      <View style={{ alignContent: "center", alignItems: "center" }}>
        <View
          style={{
            height: windowHeight / 4,
            width: windowWidth / 1.3,
            backgroundColor: Theme.primary,
            borderRadius: windowWidth / 30,
            elevation: 20,
            alignContent: "center",
            // alignItems: "center",
          }}
        >
          <ProfileChunkView
            style={{
              marginLeft: 20,
            }}
            icon={
              <MaterialIcons
                name="phone-enabled"
                size={24}
                color={Theme.secondary}
              />
            }
            title="Phone number"
            detail="+254 723 445 553"
          />
          <ProfileChunkView
            style={{
              marginLeft: 20,
            }}
            icon={
              <MaterialIcons name="email" size={24} color={Theme.secondary} />
            }
            title="Email"
            detail="josh@Kuku.yai"
          />
          <ProfileChunkView
            style={{
              marginLeft: 20,
            }}
            icon={
              <FontAwesome
                name="credit-card-alt"
                size={24}
                color={Theme.secondary}
              />
            }
            title="cc number"
            detail="1432 xxx xxx xx"
          />
        </View>
        <View
          style={{
            height: windowHeight / 3,
            marginTop: 13,
            width: windowWidth / 1.2,
            backgroundColor: Theme.transparent,
            borderRadius: windowWidth / 30,

            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Theme.darkText,
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Privacy and notification
          </Text>
          <View
            style={{
              height: windowHeight / 3.4,
              width: windowWidth / 1.3,
              backgroundColor: Theme.primary,
              borderRadius: windowWidth / 30,
              // elevation: 20,
              alignContent: "center",
              // alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <ProfileChunkView
                style={{
                  marginLeft: 20,
                }}
                icon={
                  <MaterialIcons
                    name="security"
                    size={24}
                    color={Theme.privacyIcon}
                  />
                }
                title="Privacy"
                detail="+254 723 445 553"
              />
            </TouchableOpacity>
            <ProfileChunkView
              style={{
                marginLeft: 20,
              }}
              icon={
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color={Theme.notifyIcon}
                />
              }
              title="notifications"
              detail="2"
            />

            <ProfileChunkView
              style={{
                marginLeft: 20,
              }}
              icon={
                <Feather
                  name="message-circle"
                  size={24}
                  color={Theme.secondary}
                />
              }
              title="help"
              detail="0200 021 000"
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("editprofile");
          }}
          style={{
            marginTop: windowHeight / 40,
          }}
        >
          <View
            style={{
              height: windowHeight / 17,
              backgroundColor: Theme.secondary,
              width: windowWidth / 1.56,
              borderRadius: windowWidth / 30,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: Theme.primary,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Edit profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
{
  /* <MaterialIcons name="email" size={24} color="black" />; */
  // <FontAwesome name="credit-card" size={24} color="black" />;
}
const ProfileChunkView = (props) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        },
        props.style,
      ]}
    >
      <View
        style={{
          backgroundColor: "#e8e8e8",
          borderRadius: 5,
          padding: 3,
          marginRight: windowWidth / 30,
        }}
      >
        {props.icon}
      </View>
      <View>
        <Text
          style={{
            color: Theme.darkText,
            fontSize: 16,
            fontFamily: Theme.fonts.secondary,
          }}
        >
          {props.title}
        </Text>
        <Text
          style={{
            color: Theme.darkText,
            fontSize: 10,
            fontFamily: Theme.fonts.secondary,
          }}
        >
          {props.detail}
        </Text>
      </View>
    </View>
  );
};
