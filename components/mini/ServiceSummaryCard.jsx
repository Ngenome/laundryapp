import { useSelector } from "react-redux";
import { windowHeight, windowWidth } from "../../styles";
import { Theme } from "../../theme";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../theme/colors";
import appearance from "../../screens/constants/appearance";
const ServiceSummaryCard = (props) => {
  const laundryServices = useSelector((state) => state.laundryServices);
  return (
    <View
      style={{
        alignContent: "center",
        backgroundColor: colors[appearance].viewBackground,
        width: windowWidth / 1.2,
        alignItems: "center",
        marginBottom: windowHeight / 100,
        minHeight: windowHeight / 5,
      }}
    >
      <View
        style={{
          //   backgroundColor: colors[appearance].background,
          width: windowWidth / 1.2,
          alignContent: "center",
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: colors[appearance].tint,
            fontSize: windowWidth / 23,
            textAlign: "left",
          }}
        >
          {props.service}
        </Text>
      </View>
      <View
        style={{
          width: windowWidth / 1.2,
          alignItems: "center",
        }}
      >
        {props.items.map((e, i) => {
          return (
            <View
              key={i}
              style={{
                width: windowWidth / 1.23,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: windowWidth / 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: Theme.fonts.Nunito_600SemiBold,
                    color: Theme.darkText,
                    fontSize: Theme.sizes.mdText,
                  }}
                >
                  {/* {laundryServices[props.service][e]} */}

                  {e}
                </Text>
              </View>
              <View
                style={{
                  width: windowWidth / 6,
                }}
              >
                <Text
                  style={{
                    fontFamily: Theme.fonts.Nunito_600SemiBold,
                    color: Theme.darkText,
                    fontSize: Theme.sizes.mdText,
                  }}
                >
                  {/* {laundryServices[props.service][e]} */}

                  {laundryServices[props.service][e].items}
                </Text>
              </View>
              <View
                style={{
                  width: windowWidth / 4,
                  flexDirection: "row",
                  overflow: "scroll",
                }}
              >
                <Text
                  style={{
                    fontFamily: Theme.fonts.Nunito_700Bold,
                    color: Theme.secondary,
                    fontSize: Theme.sizes.mdText,
                  }}
                >
                  {props.sign}
                </Text>
                <Text
                  style={{
                    fontFamily: Theme.fonts.Nunito_700Bold,
                    color: Theme.secondary,
                    fontSize: Theme.sizes.mdText,
                  }}
                >
                  {laundryServices[props.service][e].total.toFixed(1)}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ServiceSummaryCard;
