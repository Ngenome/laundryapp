import React from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { data } from "../../api/dummy";
import { windowHeight } from "../../styles";
import CarouselCardItem, {
  ITEM_WIDTH,
  SLIDER_WIDTH,
} from "../mini/carouseItem";

const CarouselCards = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        autoplay={true}
        sliderHeight={windowHeight / 4}
        loop={true}
        autoplayDelay={1000}
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        inactiveSlideShift={0}
        style={
          {
            //   height: windowHeight / 4,
          }
        }
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        containerStyle={{
          height: windowHeight / 10,
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;
