import { useState, React } from "react";
import { View, Text } from "react-native";
import { windowHeight, windowWidth } from "../styles";
import { Theme } from "../theme";
import Accordion from "react-native-collapsible/Accordion";
import { CenteredButton } from "../components";
import Collapsible from "react-native-collapsible";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import MapView from "react-native-maps";
import { List } from "react-native-paper";
import { DefaultText } from "../components/mini/texts";
const helpItems = [
  {
    name: "Help with a trip",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa labore totam dolores et, rem eos est repellat perferendis earum. Repudiandae eos impedit enim repellat nisi? Nisi ullam iure officiis aut!Lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cum, quia sit commodi corrupti hic, maiores placeat assumenda deserunt nostrum consequuntur doloremque esse autem ullam quas ab quo magni laudantium!",
  },
  {
    name: "Account or payment issue",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa labore totam dolores et, rem eos est repellat perferendis earum. Repudiandae eos impedit enim repellat nisi? Nisi ullam iure officiis aut!Lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cum, quia sit commodi corrupti hic, maiores placeat assumenda deserunt nostrum consequuntur doloremque esse autem ullam quas ab quo magni laudantium!",
  },
  {
    name: "More",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa labore totam dolores et, rem eos est repellat perferendis earum. Repudiandae eos impedit enim repellat nisi? Nisi ullam iure officiis aut!Lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cum, quia sit commodi corrupti hic, maiores placeat assumenda deserunt nostrum consequuntur doloremque esse autem ullam quas ab quo magni laudantium!",
  },
  {
    name: "A guide to Ribrad",
    detail:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa labore totam dolores et, rem eos est repellat perferendis earum. Repudiandae eos impedit enim repellat nisi? Nisi ullam iure officiis aut!Lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, cum, quia sit commodi corrupti hic, maiores placeat assumenda deserunt nostrum consequuntur doloremque esse autem ullam quas ab quo magni laudantium!",
  },
];

export default function HelpScreen() {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  const [activePage, setActivePage] = useState("laundry");
  const [activeSections, setActiveSections] = useState([]);
  const [isCollapsed, setCollapsed] = useState(false);
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: windowWidth / 1.2,
        }}
      >
        <CenteredButton
          hRatio={20}
          wRatio={4}
          style={{
            marginTop: windowHeight / 34,
            marginHorizontal: 0,
            marginLeft: 0,
          }}
          radiusRatio={20}
          title="LAUNDRY"
          bgColor={activePage == "LAUNDRY" ? Theme.secondary : Theme.lightDark}
          onPress={() => {
            setActivePage(true);
          }}
        />

        <CenteredButton
          hRatio={20}
          wRatio={4}
          style={{
            marginTop: windowHeight / 34,
            marginHorizontal: windowWidth / 20,
          }}
          radiusRatio={20}
          title="SHOP"
          bgColor={Theme.secondary}
          onPress={() => {
            setActivePage(true);
          }}
        />
      </View>
      <View
        style={{
          marginTop: windowHeight / 60,
        }}
      >
        <Text
          style={{
            color: Theme.colors.mainTextColor,
            fontSize: windowWidth / 23,
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            textAlign: "left",
          }}
        >
          Your last order
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: windowWidth / 1.2,
            marginTop: windowHeight / 60,
          }}
        >
          <Text
            style={{
              color: Theme.colors.mainTextColor,
              fontSize: windowWidth / 23,
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              textAlign: "left",
            }}
          >
            5/11/22 , 14:44
          </Text>
          <Text
            style={{
              color: Theme.colors.mainTextColor,
              fontSize: windowWidth / 23,
              fontFamily: Theme.fonts.Nunito_600SemiBold,
              textAlign: "left",
            }}
          >
            $316.00
          </Text>
        </View>
        <View
          style={{
            height: windowHeight * 0.2,
            width: windowWidth / 1.2,
            backgroundColor: Theme.backgrounds.primaryBG,
            marginTop: windowHeight / 60,
          }}
        >
          <MapView
            style={{
              height: windowHeight * 0.2,
              width: windowWidth / 1.2,
            }}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <Text
          style={{
            color: Theme.colors.mainTextColor,
            fontSize: windowWidth / 23,
            fontFamily: Theme.fonts.Nunito_600SemiBold,
            textAlign: "left",
          }}
        >
          Report an issue with this order
        </Text>
        <View
          style={{
            height: windowHeight / 2.5,
            width: windowWidth / 1.2,
          }}
        >
          <ScrollView>
            <List.Section>
              {helpItems.map((e, i) => {
                return (
                  <List.Accordion
                    title={e.name}
                    left={(props) => {
                      return (
                        <View
                          style={{
                            width: windowWidth / 14,
                            height: windowWidth / 14,
                            backgroundColor: Theme.secondary,
                            borderRadius: windowWidth / 28,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: Theme.primary,
                              fontSize: windowWidth / 23,
                              fontFamily: Theme.fonts.Nunito_600SemiBold,
                              textAlign: "center",
                            }}
                          >
                            {i}
                          </Text>
                        </View>
                      );
                    }}
                  >
                    <Text
                      style={{
                        color: Theme.colors.mainTextColor,
                        fontSize: windowWidth / 30,
                        fontFamily: Theme.fonts.Nunito_600SemiBold,
                        textAlign: "left",
                      }}
                    >
                      {e.detail}
                    </Text>
                  </List.Accordion>
                );
              })}
            </List.Section>
          </ScrollView>
        </View>
        <View>
          <DefaultText
            fontSize={windowWidth / 24}
            onPress={() => {}}
            value="Speak to an agent"
            style={{
              marginBottom: windowHeight / 100,
            }}
          />
          <DefaultText
            fontSize={windowWidth / 24}
            value="Call support"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
}
//
/** 
 * 
 * 
 * sections={[
              {
                title: "Frist",
                content:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat esse blanditiis, aspernatur sit reprehenderit harum aliquam deserunt id iusto aut, alias ipsum voluptatum sunt enim, voluptate nam? Saepe, eius!",
              },
              {
                title: "Second",
                content:<Collapsible collapsed={isCollapsed}>
            <View>
              <TouchableOpacity
                style={{
                  height: windowHeight / 10,
                }}
                onPress={() => setCollapsed(true)}
              ></TouchableOpacity>
              <Text>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati repellat esse blanditiis, aspernatur sit reprehenderit
                harum aliquam deserunt id iusto aut, alias ipsum voluptatum sunt
                enim, voluptate nam? Saepe, eius! "Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Obcaecati repellat esse
                blanditiis, aspernatur sit reprehenderit harum aliquam deserunt
                id iusto aut, alias ipsum voluptatum sunt enim, voluptate nam?
                Saepe, eius! "Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Obcaecati repellat esse blanditiis, aspernatur sit
                reprehenderit harum aliquam deserunt id iusto aut, alias ipsum
                voluptatum sunt enim, voluptate nam? Saepe, eius! "Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Obcaecati repellat
                esse blanditiis, aspernatur sit reprehenderit harum aliquam
                deserunt id iusto aut, alias ipsum voluptatum sunt enim,
                voluptate nam? Saepe, eius!
              </Text>
            </View>
          </Collapsible>
                  "This is too good Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repellat esse blanditiis, aspernatur sit reprehenderit harum aliquam deserunt id iusto aut, alias ipsum voluptatum sunt enim, voluptate nam? Saepe, eius! ",
              },
            ]}
            activeSections={activeSections}
            renderSectionTitle={(section) => (
              <View>
                <Text>{section.title}</Text>
              </View>
            )}
            renderHeader={(section) => (
              <View>
                <Text>{section.content}</Text>
              </View>
            )}
            renderContent={(section) => (
              <View>
                <Text>{section.content}</Text>
              </View>
            )}
            onChange={setActiveSections}
*/
const NumberedListView = (props) => {
  return (
    <View>
      {props.items.map((e, i) => {
        return (
          <View>
            <Text
              style={{
                color: Theme.primary,
                fontSize: windowWidth / 23,
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                textAlign: "left",
              }}
            >
              {i}
            </Text>
            <Text
              style={{
                color: Theme.primary,
                fontSize: windowWidth / 23,
                fontFamily: Theme.fonts.Nunito_600SemiBold,
                textAlign: "left",
              }}
            >
              {e.name}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const NumberedListCollapsibleView = (props) => {
  const [activeItems, setActiveItems] = useState([]);

  return (
    <ScrollView>
      {props.items.map((e, i) => {
        return (
          <View>
            <TouchableOpacity
              style={{
                height: windowHeight / 10,
              }}
              onPress={() => () => {
                setActiveItems([i].concat(activeItems));
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: Theme.primary,
                    fontSize: windowWidth / 23,
                    fontFamily: Theme.fonts.Nunito_600SemiBold,
                  }}
                >
                  {i}
                </Text>
                <Text
                  style={{
                    color: Theme.primary,
                    fontSize: windowWidth / 23,
                    fontFamily: Theme.fonts.Nunito_600SemiBold,
                  }}
                >
                  {e.name}
                </Text>
                {activeItems.includes(i) ? (
                  <TouchableOpacity
                    style={{
                      height: windowHeight / 10,
                    }}
                    onPress={() => {
                      setActiveItems(
                        activeItems.filter((item) => {
                          return item === i;
                        })
                      );
                    }}
                  >
                    <Entypo
                      name="chevron-up"
                      color={Theme.icons.primary}
                      size={windowWidth / 30}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      height: windowHeight / 10,
                    }}
                    onPress={() => setActiveItems([i].concat(activeItems))}
                  >
                    <Entypo
                      name="chevron-down"
                      color={Theme.icons.secondary}
                      size={windowWidth / 30}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </TouchableOpacity>
            <Collapsible collapsed={activeItems.includes(i)}>
              <View>
                <Text
                  style={{
                    color: Theme.darkText,
                    fontSize: windowWidth / 23,
                    fontFamily: Theme.fonts.nunito,
                  }}
                >
                  {e.detail}
                </Text>
              </View>
            </Collapsible>
          </View>
        );
      })}
    </ScrollView>
  );
};
