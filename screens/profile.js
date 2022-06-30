import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

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
import colors from "../theme/colors";
import appearance from "./constants/appearance";
import StackCreator from "../components/stackCreator";

const Stack = createStackNavigator();

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [remember, setRemember] = useState(false);
  const dispatch = useDispatch();

  useFocusEffect(() => {
    // navigation.setOptions({ title: "Profile" });
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Theme.backgrounds.primaryBG,
      }}
    >
      <View
        style={{
          height: windowHeight * 0.9,
          width: windowWidth,
          position: "absolute",
          zIndex: -2,
          backgroundColor: colors[appearance].viewBackground,
        }}
      >
        <View
          style={{
            height: windowHeight * 0.34,
            width: windowWidth,

            position: "relative",
          }}
        ></View>
        <View>
          <View
            style={{
              height: windowHeight * 0.56,
              width: windowWidth,
              borderTopRightRadius: windowWidth / 16,
              borderTopLeftRadius: windowWidth / 16,
              alignSelf: "flex-end",

              position: "relative",
              backgroundColor: Theme.primaryBG,
            }}
          ></View>
        </View>
      </View>
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
              width: windowWidth / 1.4,
              marginBottom: 5,
              marginTop: windowHeight / 60,
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
              height: windowHeight / 12,
              width: windowHeight / 12,
              borderRadius: windowHeight / 24,
            }}
          />
        </View>
      </View>
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
          marginTop: windowHeight / 34,
        }}
      >
        <View
          style={{
            height: windowHeight / 4,
            width: windowWidth / 1.3,
            backgroundColor: Theme.backgrounds.primaryBG,
            borderRadius: windowWidth / 30,
            elevation: 20,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <ProfileChunkView
            style={{
              marginLeft: 20,
            }}
            icon={
              <MaterialIcons
                name="phone-enabled"
                size={windowWidth * 0.06}
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
              <MaterialIcons
                name="email"
                size={windowWidth * 0.06}
                color={Theme.secondary}
              />
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
                size={windowWidth * 0.05}
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
            marginTop: windowHeight / 20,
            width: windowWidth / 1.3,
            backgroundColor: Theme.transparent,
            borderRadius: windowWidth / 30,

            alignContent: "center",

            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: windowWidth / 1.5,
              marginLeft: windowWidth / 24,
            }}
          >
            <Text
              style={{
                color: Theme.darkText,
                fontSize: 14,
                fontFamily: Theme.fonts.Nunito_800ExtraBold,
                textAlign: "left",
              }}
            >
              Privacy and notification
            </Text>
          </View>
          <View
            style={{
              height: windowHeight / 3.4,
              width: windowWidth / 1.3,
              backgroundColor: Theme.backgrounds.primaryBG,
              borderRadius: windowWidth / 30,
              marginTop: windowHeight / 60,

              alignContent: "center",
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
                    color={Theme.icons.secondary}
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("help", {});
              }}
            >
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
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("editprofile");
          }}
          style={{
            marginTop: windowHeight / 80,
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
                color: Theme.foregroundOnColoredViews,
                fontSize: 16,
                fontFamily: Theme.fonts.Nunito_600SemiBold,
              }}
            >
              Edit profile
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
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
            fontFamily: Theme.fonts.Nunito_600SemiBold,
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

export const ProfileStack = () => {
  return <StackCreator name={"Profile"} component={ProfileScreen} />;
};
