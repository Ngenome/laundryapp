import { View, Text } from "react-native";
import { windowHeight, windowWidth } from "../../styles";
import { Theme } from "../../theme";

const OrderCardy = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Theme.primary,
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
              backgroundColor: "red",
              marginRight: windowWidth / 16,
            }}
          ></View>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: Theme.darkText,
              }}
            >
              i
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: Theme.lightDark,
              }}
            >
              24hr service
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
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
  );
};

export default OrderCardy;
