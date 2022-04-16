import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { windowHeight, windowWidth } from "../../styles";
import { Theme } from "../../theme";

const HorizontalCategoryView = (props) => {
  return (
    <View
      style={{
        width: windowWidth,
        ...props.style,
        justifyContent: "center",
      }}
    >
      <ScrollView
        horizontal={true}
        style={{
          width: windowWidth,
        }}
      >
        {props.items.map((e, i) => {
          return (
            <View
              key={i}
              style={{
                width: windowWidth / 8,
                marginHorizontal: windowWidth / 30,
              }}
            >
              <Text
                style={{
                  fontFamily: Theme.fonts.Nunito_600SemiBold,
                  color: Theme.mdDark,
                  fontSize: windowWidth / 27,

                  textAlign: "center",
                }}
              >
                {e.name}
              </Text>
              {props.active == e.name && (
                <View
                  style={{
                    height: windowHeight / 200,
                    borderRadius: windowHeight / 300,

                    backgroundColor: Theme.secondary,
                  }}
                ></View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export const ProductCard = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("shop_product_detail", {
          id: props.id,
          name: props.name,
          stars: props.stars,
          sign: props.sign,
          cost: props.cost,
          detail: props.detail,
          images: props.images,
          sizes: props.sizes,
        });
      }}
    >
      <View
        style={{
          height: props.h,
          width: props.w,
          marginHorizontal: props.w / 20,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: Theme.defaultBG,
          padding: props.w / 10,
        }}
      >
        <View style={{}}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNRewAt-cxIhCs6GKXdAz5zbWWRhmk7CTHg&usqp=CAU",
            }}
            style={{
              height: props.h / 1.3,
              resizeMode: "contain",
              width: props.w / 1.3,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: props.w - 2,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                color: Theme.mdDark,
                fontSize: props.w / 9,

                textAlign: "center",
              }}
            >
              {props.name}
            </Text>
            <Text
              style={{
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                color: Theme.mdDark,
                fontSize: props.w / 10,

                textAlign: "center",
              }}
            >
              {props.sign} {props.cost}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Entypo
              name="star"
              size={props.h / 10}
              color={
                props.stars > 5
                  ? "#eaf200"
                    ? props.stars > 1
                    : "#eaf200"
                    ? props.stars > 50
                    : "red"
                  : "#eaf200"
              }
            />
            <Text
              style={{
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                color: Theme.mdDark,
                fontSize: props.h / 10,

                textAlign: "center",
              }}
            >
              ({props.stars})
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const SlidingView = (props) => {
  const [activeImage, setActiveImage] = useState(
    "http://www.threelayer.com/wp-content/uploads/2017/05/Y300-Gold_750.jpg"
  );
  // const [currentID, setCurrentID] = useState(1);
  // const images = [
  //   {
  //     url: "http://www.threelayer.com/wp-content/uploads/2017/05/Y300-Gold_750.jpg",
  //     id: 1,
  //   },
  //   {
  //     url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639060767-sweatshirts-2022-jgt-1639060404.jpg",
  //     id: 2,
  //   },
  //   {
  //     url: "https://cdn.shopify.com/s/files/1/2987/0758/products/Piece_Hoodie-Hoodie-LDM201017-232041-Oyster_Gray_Melange_Olive-Ivory_600x.jpg?v=1642675321",
  //     id: 3,
  //   },
  // ];

  // setInterval(() => {
  //   setActiveImage(images[currentID].url);
  //   if (currentID < images.length) {
  //     setCurrentID(currentID + 1);
  //   } else {
  //     setCurrentID(1);
  //   }
  // }, 2000);
  return (
    <View>
      <Image
        source={{
          uri: activeImage,
        }}
        style={{
          height: windowHeight / 3,
          resizeMode: "contain",
          width: windowWidth / 1.3,
        }}
      />
      <Pagination
        items={[1, 2, 3, 4, 5, 6, 7]}
        activeColor={Theme.tertiary}
        active={3}
        inactiveColor={Theme.lightDark}
      />
    </View>
  );
};
const Pagination = (props) => {
  return (
    <View>
      {props.items.map((e, i) => {
        return (
          <View
            style={{
              height: windowHeight / 30,
              width: windowHeight / 30,
              marginHorizontal: windowWidth / 40,
              borderRadius: windowHeight / 60,
              backgroundColor:
                props.active == i ? props.activeColor : props.inactiveColor,
            }}
          ></View>
        );
      })}
      <View></View>
    </View>
  );
};
export function InlineItemStarsCostView(props) {
  const route = useRoute();
  return (
    <View
      style={{
        height: windowHeight / 9,
        backgroundColor: Theme.primaryBG,

        width: windowWidth,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          width: windowWidth / 1.3,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            color: Theme.mdDark,
            fontSize: windowWidth / 25,

            textAlign: "center",
          }}
        >
          {route.params.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: windowWidth / 3.5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: windowWidth / 40,
            }}
          >
            <Entypo
              name="star"
              size={windowWidth / 18}
              color={
                route.params.stars > 5
                  ? "#eaf200"
                    ? route.params.stars > 1
                    : "#eaf200"
                    ? route.params.stars > 50
                    : "red"
                  : "#eaf200"
              }
            />
            <Text
              style={{
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                color: Theme.mdDark,
                fontSize: windowWidth / 30,

                textAlign: "center",
              }}
            >
              {route.params.stars}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: Theme.fonts.primaryFont,
              color: Theme.mdDark,
              fontSize: windowWidth / 20,

              textAlign: "center",
            }}
          >
            {route.params.sign} {route.params.cost}
          </Text>
        </View>
      </View>
    </View>
  );
}
