import { StatusBar } from "expo-status-bar";
import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Checkbox from "expo-checkbox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";

import { Theme } from "../theme";
import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import {
  BButton,
  CenteredButton,
  FButton,
  IconInput,
  LabelledInput,
} from "../components";
import { styles, windowHeight, windowWidth } from "../styles";

import { createStackNavigator } from "@react-navigation/stack";
import WashingMachine from "../assets/washing-machine.svg";
import { useDispatch } from "react-redux";
import { changeScreen } from "../redux/actions";
import {
  Entypo,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const Stack = createStackNavigator();
const orders = [];
export default function EditProfileScreen() {
  const [ProfileImage, setProfileImage] = useState(
    "https://media-exp1.licdn.com/dms/image/C4D03AQF0lTK8c0nRMQ/profile-displayphoto-shrink_200_200/0/1637662257665?e=1653523200&v=beta&t=pNsKj6Cw8gSFCmGtRleCSmNkbAQcYABNVVtS1r47TCE"
  );

  const dispatch = useDispatch();
  const navigation = useNavigation();
  useFocusEffect(() => {
    dispatch(changeScreen("Edit Profile"));
  });
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [ccNumber, setCcNumber] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [imagePickerModal, setImagePickerModal] = useState(false);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };
  const captureImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <View
      style={{
        alignContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          navigation.goBack();
        }}
      >
        <View
          style={{
            height: windowHeight,
            width: windowWidth,
            backgroundColor: "rgba(100,100,100,0.2)",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              height: windowHeight / 1.7,
              width: windowWidth / 1.2,
              backgroundColor: Theme.primaryBG,
              borderRadius: windowHeight / 40,
            }}
          >
            <View
              style={{
                height: windowHeight / 6,
                width: windowHeight / 6,
                backgroundColor: Theme.secondary,
                borderRadius: windowHeight / 4,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <MaterialIcons
                name="done"
                size={windowHeight / 7}
                color={Theme.icons.primary}
              />
            </View>
            <Text
              style={{
                fontFamily: Theme.fonts.secondary,
                color: Theme.darkText,
                fontSize: windowWidth / 20,
              }}
            >
              Updated your profile
            </Text>

            <View
              style={{
                marginTop: windowHeight / 30,
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate("Profile");
                }}
              >
                <Text
                  style={{
                    fontFamily: Theme.fonts.secondary,
                    color: Theme.text.secondary,
                    fontSize: Theme.sizes.smText + 5,
                    textAlign: "center",
                  }}
                >
                  Back to your profile
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </Modal>
      <Text
        style={{
          color: Theme.darkText,
          fontFamily: Theme.fonts.secondary,
          fontSize: Theme.sizes.mdText,
          textAlign: "center",
          marginTop: windowHeight / 60,
        }}
      >
        Edit Profile
      </Text>

      <View
        style={{
          marginTop: windowHeight / 30,
          flex: 1,
          position: "relative",
          left: 0,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={imagePickerModal}
            onRequestClose={() => {
              setImagePickerModal(false);
            }}
          >
            <View
              style={{
                flex: 1,
                width: windowWidth,
                backgroundColor: "rgba(100,100,100,0.9)",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  height: windowHeight / 5,
                  backgroundColor: Theme.primaryBG,
                  justifyContent: "center",
                }}
              >
                <View style={[{}, styles.flexRow]}>
                  <TouchableOpacity onPress={captureImage}>
                    <View style={styles.pickerView}>
                      <FontAwesome5
                        name="camera"
                        color={Theme.icons.tertiary}
                        size={windowHeight / 20}
                      />

                      <Text
                        style={{
                          color: Theme.secondary,
                          fontFamily: Theme.fonts.secondary,
                          fontSize: Theme.sizes.smText,
                          textAlign: "center",
                        }}
                      >
                        Take Photo
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={pickImage}>
                    <View style={styles.pickerView}>
                      <Feather
                        name="image"
                        color={Theme.icons.tertiary}
                        size={windowHeight / 20}
                      />
                      <Text
                        style={{
                          color: Theme.secondary,
                          fontFamily: Theme.fonts.secondary,
                          fontSize: Theme.sizes.smText,
                          textAlign: "center",
                        }}
                      >
                        Select image
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.pickerView}>
                      <MaterialCommunityIcons
                        name="web"
                        color={Theme.icons.tertiary}
                        size={windowHeight / 20}
                      />
                      <Text
                        style={{
                          color: Theme.secondary,
                          fontFamily: Theme.fonts.secondary,
                          fontSize: Theme.sizes.smText,
                          textAlign: "center",
                        }}
                      >
                        Enter Image URL
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          <TouchableOpacity
            onPress={() => {
              setImagePickerModal(true);
            }}
          >
            <Image
              source={{
                uri: ProfileImage,
              }}
              style={{
                height: windowHeight / 10,
                width: windowHeight / 10,
                borderRadius: windowHeight / 20,
              }}
            />
          </TouchableOpacity>
        </View>
        <LabelledInput
          hRatio={12}
          wRatio={1.3}
          placeholder="Your name here"
          label="Your name"
          onChangeText={(text) => {
            setName(text);
          }}
          radiusRatio={40}
        />
        <LabelledInput
          hRatio={12}
          wRatio={1.3}
          placeholder="Your phone number"
          label=" Phone number"
          onChangeText={(text) => {
            setContact(text);
          }}
          radiusRatio={40}
        />
        <LabelledInput
          hRatio={12}
          wRatio={1.3}
          placeholder="Your email "
          label="Email Address"
          onChangeText={(text) => {
            setEmail(text);
          }}
          radiusRatio={40}
        />
        <LabelledInput
          hRatio={12}
          wRatio={1.3}
          placeholder="credit card number"
          label=" Credit card number"
          onChangeText={(text) => {
            setCcNumber(text);
          }}
          radiusRatio={40}
        />

        <CenteredButton
          hRatio={20}
          wRatio={2}
          style={{
            marginTop: windowHeight / 34,
          }}
          radiusRatio={20}
          title="Save profile"
          bgColor={Theme.secondary}
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
    </View>
  );
}
