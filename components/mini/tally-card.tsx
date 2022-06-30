import { Entypo } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import useForceUpdate from "../../hooks/useForceUpdate";
import { windowHeight, windowWidth } from "../../styles";
import { Theme } from "../../theme";

export default function TallyCard(props) {
  const forceUpdate = useForceUpdate();
  const route = props.route;
  const laundryServices = useSelector((state: any) => state.laundryServices);
  const [amount, setAmount] = useState(0);
  var cartData = { ...props.cartData };
  useFocusEffect(
    useCallback(() => {
      setAmount(props.initialAmnt);
      console.log("I have landed again");
      forceUpdate();
    }, [])
  );
  useEffect(() => {
    console.log("the " + props.name + "total is" + amount * props.cost);
    console.log("amount changed to");
    cartData[props.name] = {
      items: amount,
      total: amount * props.cost,
    };
    props.setCartData(cartData);
  }, [amount]);

  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        marginVertical: windowHeight / 60,
        height: windowWidth / 8,
        width: windowWidth / 1.3,
        alignContent: "center",

        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 5,
          height: windowHeight / 16,
          width: windowWidth / 7,
          marginLeft: windowWidth / 18,
        }}
      >
        <Image
          source={{
            uri: props.imageURI,
          }}
          style={{
            height: windowHeight / 15,
            width: windowHeight / 15,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: windowWidth / 2,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.nunito,
            color: Theme.primary,
            fontSize: windowWidth / 25,
          }}
        >
          {props.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setAmount(amount + 1);
            }}
          >
            <Entypo
              name="plus"
              color={Theme.primary}
              size={Theme.sizes.orderIconSize}
            />
          </TouchableOpacity>
          <Text>{amount}</Text>
          <TouchableOpacity
            onPress={() => {
              if (amount !== 0) {
                setAmount(amount - 1);
              }
            }}
          >
            <Entypo
              name="minus"
              color={Theme.primary}
              size={Theme.sizes.orderIconSize}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
