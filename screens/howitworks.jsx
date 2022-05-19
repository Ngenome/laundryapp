const slides = [
  {
    key: "one",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("./assets/1.jpg"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("./assets/2.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("./assets/3.jpg"),
    backgroundColor: "#22bcb5",
  },
];

export function HowItWorks(props) {
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  return <AppIntroSlider renderItem={this._renderItem} data={slides} />;
}
