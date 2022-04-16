import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, Text, TouchableOpacity, Alert } from "react-native";
import { windowHeight, windowWidth } from "../../styles";
import { Theme } from "../../theme";
import { Entypo } from "@expo/vector-icons";
import { InlineItemStarsCostView } from "./components";
import { useState } from "react";
import { CenteredButton } from "../../components";
import { useDispatch } from "react-redux";
import { ADDITEM } from "../../redux/actions";

export const ShopProductScreen = () => {
  const route = useRoute();
  const [activeSize, setActiveSize] = useState("small");
  const [activeColor, setActiveColor] = useState("oceanblue");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      <View
        style={{
          height: windowHeight / 3,
        }}
      >
        <Image
          source={{
            uri: "https://biashara.co.ke/wp-content/uploads/2015/07/595905-500x500.jpg",
          }}
          style={{
            width: windowWidth / 1.2,
            height: windowHeight / 3,
            resizeMode: "contain",
          }}
        />
      </View>
      <View
        style={{
          backgroundColor: Theme.primaryBG,
          flex: 1,
        }}
      >
        <View
          style={{
            marginLeft: windowWidth / 15,
          }}
        >
          <InlineItemStarsCostView />
          <ListViewComponent
            textcolor={Theme.primary}
            font={Theme.fonts.secondary}
            items={["Regular Fit", "100% Cotton", "Design Unisex"]}
            fontSize={19}
            icon={<Text> - </Text>}
            route={route}
          />
          <ItemSelector
            activeTextColor={Theme.primary}
            textcolor={Theme.mdDark}
            title="Size"
            activeItem={activeSize}
            setActiveItem={setActiveSize}
            displayType="view"
            activeColor={Theme.tertiary}
            inactiveColor={Theme.colors.activeColor}
            vh={windowHeight / 20}
            vw={windowHeight / 20}
            mb={windowHeight / 50}
            ml={windowWidth / 40}
            items={[
              { title: "small", value: "S" },
              { title: "medium", value: "M" },
              { title: "large", value: "L" },
              { title: "xtra large", value: "X" },
            ]}
            containerStyles={{
              marginTop: windowHeight / 40,
            }}
          />
          <ItemSelector
            activeTextColor={Theme.primary}
            textcolor={Theme.mdDark}
            title="Color"
            activeItem={activeColor}
            setActiveItem={setActiveColor}
            displayType="color"
            activeBorderColor={Theme.colors.activeBorderColor}
            inactiveBorderColor={Theme.colors.inactiveColor}
            vh={windowHeight / 20}
            vw={windowHeight / 20}
            mb={windowHeight / 30}
            ml={windowWidth / 40}
            items={[
              { title: "oceanblue", value: "#4287f5" },
              { title: "darkblue", value: "#181282" },
              { title: "dark red", value: "#a60008" },
              { title: "xtra large", value: "#030303" },
            ]}
            ViewStyles={{}}
          />
          <View
            style={{
              width: windowWidth / 1.01,
              alignItems: "center",
            }}
          >
            <CenteredButton
              hRatio={20}
              wRatio={1.2}
              style={{
                marginTop: windowHeight / 25,
              }}
              radiusRatio={20}
              title="Add to cart"
              bgColor={Theme.secondary}
              onPress={() => {
                dispatch(
                  ADDITEM({
                    id: route.params.id,
                    name: route.params.name,
                    cost: route.params.cost,
                    color: activeColor,
                    size: activeSize,
                    image:
                      "https://i1.wp.com/t-shirts.co.ke/wp-content/uploads/2020/05/GILDAN-Solid-color-T-Shirt-Mens-Black-And-White-100-cotton-T-shirts-Summer-Skateboard-Tee-3.jpg?fit=800%2C800&ssl=1",
                    sign: "$",
                    amount: 1,
                    tax: 4.92,
                  })
                );
                navigation.navigate("shop_cart");
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export function ListViewComponent(props) {
  const route = useRoute();
  return (
    <View
      style={{
        width: windowWidth / 1.2,
      }}
    >
      {props.items.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {props.icon}
            <Text
              style={{
                color: Theme.darkText,
                fontFamily: Theme.fonts.primaryFont,
                fontSize: windowWidth / 30,

                textAlign: "center",
              }}
            >
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

export function ListComponent(props) {
  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      {["te", "ti"].map((e, i) => {
        return <Text key={i}>{e}</Text>;
      })}
    </View>
  );
}
function ItemSelector(props) {
  const activeItem = props.activeItem;
  return (
    <View
      style={{
        ...props.containerStyles,
      }}
    >
      <Text
        style={{
          color: props.textcolor,
          fontFamily: Theme.fonts.primaryFont,
          fontSize: windowWidth / 30,
          marginBottom: props.mb ? props.mb : props.vh / 5,
        }}
      >
        {props.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {props.displayType == "view" ? (
          props.items.map((e, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.setActiveItem(e.title);
                }}
              >
                <View
                  style={{
                    height: props.vh,
                    width: props.vw,
                    borderRadius: props.vh / 30,
                    backgroundColor:
                      e.title == activeItem
                        ? Theme.colors.activeColor
                        : Theme.colors.inactiveColor,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: e.title == props.items[0].title ? 0 : props.ml,
                    ...props.ViewStyles,
                  }}
                >
                  <Text
                    style={{
                      color:
                        e.title == activeItem
                          ? props.activeTextColor
                          : props.textcolor,
                      fontFamily: Theme.fonts.primaryFont,
                      fontSize: props.fontSize
                        ? props.fontSize
                        : windowWidth / 30,

                      textAlign: "center",
                      ...props.textStyles,
                    }}
                  >
                    {e.value}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })
        ) : props.displayType == "color" ? (
          props.items.map((e, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  props.setActiveItem(e.title);
                }}
              >
                <View
                  style={{
                    height: props.vh,
                    width: props.vw,
                    borderRadius: props.vh / 2,

                    backgroundColor: e.value,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: 3,
                    borderColor:
                      activeItem == e.title
                        ? props.activeBorderColor
                        : props.inactiveBorderColor,
                    marginLeft: e.title == props.items[0].title ? 0 : props.ml,
                    ...props.ViewStyles,
                  }}
                ></View>
              </TouchableOpacity>
            );
          })
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
