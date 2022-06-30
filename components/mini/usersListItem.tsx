import React, { useContext } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useChatContext } from "stream-chat-react-native-core";
// import AuthContext from "../contexts/authentication";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

const UserListItem = ({ user }) => {
  const { client } = useChatContext();
  const auth = useSelector((state: any) => state.auth);
  const navigation = useNavigation();

  const onPress = async () => {
    if (!user.id || !auth.username) {
      console.log("something is null");
      return;
    }
    const channel = client.channel("messaging", {
      members: [user.id, auth.username],
    });
    await channel.watch();
    const toUser = Object.keys(channel.state.members).filter(
      (item) => item != channel.state.membership.user.id
    );
    const finalToUser = channel.state.members[toUser[0]];

    navigation.navigate("Channel", {
      channelId: channel.id,
      user: finalToUser.user,
    });
  };

  // console.log(user);
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{ uri: user.image }} />
      <Text>{user.name ?? user.id}</Text>
      <Text> {user.online && "(online)"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    borderRadius: 50,
    marginRight: 10,
  },
});

export default UserListItem;
