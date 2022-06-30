import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { ChannelList, useChatContext } from "stream-chat-expo";

export default function ChannelListScreen({ navigation }) {
  const { client } = useChatContext();
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [loadedChats, setLoadedChats] = useState(false);
  const auth = useSelector((state: any) => state.auth);
  const connectUser = async (
    username: string,
    id: string,
    fullName: string,
    image?: string
  ) => {
    await client.connectUser(
      {
        id: username,
        name: fullName,
        image: image,
      },
      client.devToken(username)
    );
    console.log("User connected");
    const channel = client.channel("messaging", "ribradchat", {
      name: "Client Chat",
    });
    await channel.watch();
    setLoadedChats(true);
  };

  const onChannelPressed = (channel) => {
    const toUser = Object.keys(channel.state.members).filter(
      (item) => item != channel.state.membership.user.id
    );
    const finalToUser = channel.state.members[toUser[0]];

    navigation.navigate("Channel", {
      channelId: channel.id,
      user: finalToUser.user,
    });
  };
  useEffect(() => {
    connectUser(
      "Kevo",
      "Interstellar",
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Kid_boy.jpg"
    );
  }, []);

  const filters = {
    members: {
      $in: [auth.username],
    },
  };

  return (
    <View style={styles.container}>
      <ChannelList onSelect={onChannelPressed} filters={filters} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
