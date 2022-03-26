import {
  Image,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { windowHeight, windowWidth } from "./styles";
import { styles } from "./styles";
import { Theme } from "./theme";

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
            //   fontFamily: props.family ? props.family : "",
            fontWeight: "bold",
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
            fontWeight: "bold",
            color: Theme.primary,
            fontSize: windowHeight / 30,
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
        height: windowHeight / 17,
        width: windowWidth / 1.3,
        elevation: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 40,
        // borderWidth: 1,
        borderColor: "gray",
        borderRadius: 20,
        marginVertical: 12,
        backgroundColor: Theme.inputBackground,
      }}
    >
      <Image
        source={{
          uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png",
        }}
        style={styles.imageStyle}
      />
      <TextInput
        style={{
          color: Theme.darkText,
        }}
        placeholder={props.placeholder}
        placeholderTextColor={Theme.placeholderColor}
      />
    </View>
  );
};

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
                  fontSize: 18,

                  color: Theme.mdDark,
                }}
              >
                {props.title}
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontFamily: Theme.fonts.primaryFont,
                  color: Theme.lightDark,
                }}
              >
                {props.description}
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "",
                color: Theme.secondary,
              }}
            >
              $10
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
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
          fontWeight: "bold",
          color: Theme.mdDark,
          fontSize: windowHeight / 42,
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
            fontWeight: "bold",
            color: Theme.mdDark,
            fontSize: Theme.sizes.mdText + 3,
          }}
        >
          {props.item}
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontWeight: "bold",
            color: Theme.secondary,
            fontSize: Theme.sizes.mdText + 3,
          }}
        >
          {props.value}
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
            fontFamily: props.font ? props.font : "",
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
