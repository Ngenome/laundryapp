import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import MaskedView from "@react-native-community/masked-view";

import { LinearGradient } from "expo-linear-gradient";
import {
  Image,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { POD } from "./helper_functions";
import { windowHeight, windowWidth } from "./styles";
import { styles } from "./styles";
import { Theme } from "./theme";
import React, { useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
export const FButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          height: windowHeight / 25,
          width: windowWidth / 4.6,
          backgroundColor: props.bg ? props.bgColor : "transparent",
          borderRadius: props.radius ? props.radius : 15,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginHorizontal: props.mH ? props.mH : 10,
        }}
      >
        <Text
          style={{
            fontFamily: props.family ? props.family : "",

            color: props.color ? props.color : Theme.primary,
            fontSize: props.fontSize ? props.fontSize : windowHeight / 40,
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export const BButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          height: windowHeight / 18,
          width: windowWidth / 2.1,
          backgroundColor: props.bg ? props.bgColor : "transparent",
          borderRadius: 35,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontFamily: props.family ? props.family : "",

            color: Theme.primary,
            fontSize: props.fontSize ? props.fontSize : windowWidth / 30,
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export const IconInput = (props) => {
  return (
    <View
      style={{
        height: POD(props.h, windowHeight / 17),
        width: POD(props.w, windowWidth / 1.3),
        elevation: 10,
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 40,
        // borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        marginVertical: 12,
        backgroundColor: Theme.inputBackground,
        fontFamily: props.fontFamily,
      }}
    >
      <View
        style={{
          width: POD(props.w, windowWidth / 1.3 - 17),
          height: POD(props.h, windowHeight / 17 - 1),
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <MaskedGradient
          gradientColors={Theme.icons.gradient}
          height={24}
          width={30}
          maskElement={
            <IconSelector
              name={props.name}
              family={props.family}
              size={props.iconSize}
            />
          }
        />

        <TextInput
          style={{
            color: Theme.darkText,
            fontFamily: props.fontFamily,
            fontSize: POD(props.fontSize, 12),
            width: POD(props.w, windowWidth / 1.4 - 40),
            height: POD(props.h, windowHeight / 17 - 1),
          }}
          placeholder={props.placeholder}
          placeholderTextColor={Theme.placeholderColor}
          {...props.TextInput}
          onChangeText={props.change}
        />

        {props.visibilityIcon && (
          <TouchableOpacity
            onPress={() => props.setVisibility(!props.visibility)}
          >
            <MaterialIcons
              name={props.visibility ? "visibility-off" : "visibility"}
              size={windowWidth / 20}
              color={Theme.secondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export function PhoneNumberInput(props) {
  const phoneInputRef = props.phoneInputRef;
  var borderRadii = windowWidth / 26;
  return (
    <View
      style={{
        height: POD(props.h, windowHeight / 17),
        width: POD(props.w, windowWidth / 1.3),
        elevation: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 40,
        // borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        marginVertical: 12,
        backgroundColor: Theme.inputBackground,
        fontFamily: props.fontFamily,
      }}
    >
      <View
        style={{
          width: POD(props.w, windowWidth / 1.3 - 17),
          height: POD(props.h, windowHeight / 17 - 1),
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <MaskedGradient
          gradientColors={Theme.icons.gradient}
          height={24}
          width={30}
          maskElement={
            <IconSelector
              name={props.name}
              family={props.family}
              size={props.iconSize}
            />
          }
        />

        <PhoneInput
          ref={phoneInputRef}
          defaultValue={props.default}
          defaultCode="US"
          layout="second"
          onChangeText={props.change}
          onChangeFormattedText={props.changeFormatted}
          onChangeCountry={props.onChangeCountry}
          withShadow
          autoFocus
          containerStyle={{
            width: POD(props.w, windowWidth / 1.55),
            borderTopRightRadius: borderRadii,
            borderBottomRightRadius: borderRadii,
            height: POD(props.h, windowHeight / 17 - 1),
          }}
          textContainerStyle={{
            width: windowWidth / 3,
            borderTopRightRadius: borderRadii,
            borderBottomRightRadius: borderRadii,
          }}
          textInputStyle={{
            color: Theme.darkText,
            fontFamily: props.fontFamily,
            fontSize: POD(props.fontSize, 12),
            width: POD(props.w, windowWidth / 2 - 40),
            height: POD(props.h, windowHeight / 17 - 1),
            margin: 0,
            padding: 0,
          }}
        />
      </View>
    </View>
  );
}
const Button101 = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{
        marginTop: windowHeight / 40,
      }}
    >
      <View
        style={{
          height: windowHeight / props.hr,
          backgroundColor: Theme.secondary,
          width: windowWidth / 1.56,
          borderRadius: windowWidth / props.wr,
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: props.color ? props.color : "white",
            fontSize: props.fontSize,
            fontWeight: props.fontWeight ? props.fontWeight : "bold",
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export const Cardy = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: Theme.primaryBG,
          width: windowWidth / 1.3,
          borderRadius: windowWidth / 39,

          height: windowHeight / 9,
          marginVertical: windowHeight / 32,
        }}
      >
        <View
          style={{
            padding: windowWidth / 30,
            flexDirection: "row",
            justifyContent: "space-between",
            width: windowWidth / 1.32,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View
              style={{
                fontSize: 15,
                fontWeight: "bold",
                height: windowHeight / 12,
                borderRadius: 7,
                width: windowWidth / 6,
                backgroundColor: props.bg,
                marginRight: windowWidth / 16,
              }}
            >
              <Image
                source={props.source}
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: Theme.fonts.Nunito_600SemiBold,
                  color: Theme.mdDark,
                }}
              >
                {props.title}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: Theme.fonts.Nunito_600SemiBold,
                  color: Theme.lightDark,
                  marginTop: windowHeight / 100,
                }}
              >
                {props.description} hr service
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 15,
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                color: Theme.secondary,
              }}
            >
              ${props.cost}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                color: Theme.lightDark,
              }}
            >
              /item
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export function LabelledInput(props) {
  return (
    <View style={props.style}>
      <Text
        style={{
          fontFamily: Theme.fonts.Nunito_600SemiBold,
          color: Theme.mdDark,
          fontSize: windowHeight / 48,
        }}
      >
        {props.label}
      </Text>
      <TextInput
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        style={{
          height: windowHeight / props.hRatio,
          width: windowWidth / props.wRatio,
          backgroundColor: Theme.primary,
          fontFamily: Theme.fonts.nunito,

          borderRadius: windowWidth / props.radiusRatio,
        }}
      />
    </View>
  );
}

function Texty() {
  return (
    <View>
      <Text
        style={{
          color: Theme.primary,
          fontSize: 15,

          marginBottom: 15,
          fontFamily: "Rubik_300Light",
        }}
      >
        Welcome Here!!
      </Text>
      <Text
        style={{
          color: Theme.primary,
          fontSize: 45,

          marginBottom: 45,
          fontFamily: "Nunito_600SemiBold",
        }}
      >
        Account Login
      </Text>
    </View>
  );
}
export const MaskedGradient = (props) => {
  return (
    <MaskedView
      style={{ height: POD(props.height, 24), width: POD(props.width, 30) }}
      maskElement={props.maskElement}
    >
      <LinearGradient
        colors={POD(props.gradientColors, ["chocolate", "cyan"])}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0.33 }}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
};
export const InlineItemValueView = (props) => {
  return (
    <View
      style={[
        { flexDirection: "row", justifyContent: "space-between" },
        props.style,
      ]}
    >
      <View style={{}}>
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.mdDark,
            fontSize: Theme.sizes.mdText,
          }}
        >
          {props.item}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.secondary,
            fontSize: Theme.sizes.mdText,
          }}
        >
          {props.value}
        </Text>
      </View>
    </View>
  );
};

export const HorizontalValueView = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          width: props.w ? props.w : "100%",
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: props.ItemTextColor,
            fontSize: Theme.sizes.mdText,
          }}
        >
          {props.item}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.secondary,
            fontSize: Theme.sizes.mdText,
          }}
        >
          {props.money && props.sign} {props.value}
        </Text>
      </View>
    </View>
  );
};
export const CenteredButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          {
            height: windowHeight / props.hRatio,
            borderRadius: windowWidth / props.radiusRatio,
            backgroundColor: props.bgColor,
            width: windowWidth / props.wRatio,
            justifyContent: "center",

            alignContent: "center",
            alignItems: "center",
          },
          props.style,
        ]}
      >
        <Text
          style={{
            fontFamily: props.font ? props.font : "Nunito_600SemiBold",
            color: Theme.primary,
            fontSize: props.fontSize ? props.fontSize : windowWidth / 30,
            textAlign: "left",
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const IconSelector = (props) => {
  if (/fontawesome5/i.test(props.family)) {
    return (
      <FontAwesome5
        name={props.name}
        size={POD(props.size, 24)}
        color={props.color}
      />
    );
  }
  if (/fontawesome/i.test(props.family)) {
    return (
      <FontAwesome
        name={props.name}
        size={POD(props.size, 24)}
        color={props.color}
      />
    );
  }

  if (/ionicons/i.test(props.family)) {
    return (
      <Ionicons
        name={props.name}
        size={POD(props.size, 24)}
        color={props.color}
      />
    );
  }

  if (/fontisto/i.test(props.family)) {
    return (
      <Fontisto
        name={props.name}
        size={POD(props.size, 24)}
        color={props.color}
      />
    );
  }
  if (/entypo/i.test(props.family)) {
    return (
      <Entypo
        name={props.name}
        size={POD(props.size, 24)}
        color={props.color}
      />
    );
  }

  if (/MaterialIcons/i) {
    return (
      <MaterialIcons
        name={props.name}
        size={POD(props.size, 24)}
        color={props.color}
      />
    );
  }
  if (/MaterialCommunityIcons/i.test(props.family)) {
    return (
      <MaterialCommunityIcons
        name={props.name}
        size={POD(props.size, 24)}
        color={props.color}
      />
    );
  }
  if (/Feather/i.test(props.family)) {
    return (
      <Feather
        name={props.name}
        size={POD(props.size, 24)}
        color={props.color}
      />
    );
  }
  return <></>;
};
export const SignInWithGoogle = (props) => {
  return (
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
        <TouchableOpacity>
          <Image
            source={require("./assets/google.png")}
            style={{
              width: windowWidth / 11,
              height: windowHeight / 10,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Rule = (props) => {
  return (
    <View
      style={{
        marginVertical: props.mv,
        backgroundColor: props.bg ? props.bg : "black",
        height: props.h ? props.h : windowHeight / 370,
        width: props.w ? props.w : windowWidth / 1.5,
        borderRadius: windowWidth / 50,
      }}
    ></View>
  );
};

export const SearchBar = (props) => {
  return (
    <View
      style={{
        height: windowHeight / 19,
        backgroundColor: Theme.primaryBG,
        width: windowWidth / 1.3,
        borderRadius: windowWidth / 50,
      }}
    >
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(text) => {
          props.setSearchText(text);
        }}
      />
    </View>
  );
};
