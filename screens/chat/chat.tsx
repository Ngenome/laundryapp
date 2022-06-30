import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";

import { Provider, useDispatch, useSelector } from "react-redux";
import { StreamChat } from "stream-chat";
import {
  Channel,
  ChannelList,
  Chat,
  MessageInput,
  MessageList,
  OverlayProvider,
} from "stream-chat-expo";
import React, { useCallback, useEffect, useState } from "react";

import * as SplashScreen from "expo-splash-screen";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";

const API_KEY = "tpzfaj9acnap";
const client = StreamChat.getInstance(API_KEY);
export default function App() {
  const DisconnectUser = async () => {
    client.disconnectUser();
  };
  useEffect(() => {
    return () => {
      DisconnectUser();
    };
  }, []);
  const [appIsReady, setAppIsReady] = useState(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OverlayProvider>
        <Chat client={client}>
          
        </Chat>
        <StatusBar />
      </OverlayProvider>
    </GestureHandlerRootView>
  );
}
