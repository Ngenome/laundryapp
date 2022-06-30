import { windowWidth } from "../../styles";
import { Theme } from "../../theme";
import { Text } from "react-native";
import { POD } from "../../helper_functions";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
export const DefaultText = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Text
        style={{
          color: POD(props.color, Theme.colors.mainTextColor),
          fontSize: POD(props.fontSize, windowWidth / 30),
          fontFamily: POD(props.fontFamily, Theme.fonts.Nunito_600SemiBold),
          ...props.style,
        }}
      >
        {props.value}
      </Text>
    </TouchableWithoutFeedback>
  );
};
