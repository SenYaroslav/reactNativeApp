import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const screenDimensions = Dimensions.get("screen");

export default function RegistrationScreen() {
  const [userData, setUserData] = useState(initialState);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);
  const [isLoginInputActive, setIsLoginInputActive] = useState(false);
  const [isEmailInputActive, setIsEmailInputActive] = useState(false);
  const [isPasswordInputActive, setIsPasswordInputActive] = useState(false);
  const [dimensions, setDimensions] = useState({
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ screen });
      }
    );
    return () => subscription?.remove();
  });

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsKeyboardShown(false);
  };

  const onFormSubmit = () => {
    console.log(userData);
    Keyboard.dismiss();
    setUserData(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBG}
          source={require("../../assets/images/photo-bg.png")}
        >
          <View style={styles.white_bg}>
            <View style={styles.img_input}>
              <Image
                style={styles.img_plus}
                source={require("../../assets/images/addImage.png")}
              />
            </View>

            <Text style={styles.title} lineHeight="1.17" letterSpacing="0.01em">
              Registration
            </Text>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "marginBottom" : "height"}
            >
              <View
                style={{
                  ...styles.form,
                  width: dimensions.screen.width - 16 * 2,
                }}
              >
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isLoginInputActive ? "#FFFFFF" : "#F6F6F6",
                    borderColor: isLoginInputActive ? "#FF6C00" : "#E8E8E8",
                  }}
                  value={userData.login}
                  onFocus={() => {
                    setIsKeyboardShown(true);
                    setIsLoginInputActive(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardShown(false);
                    setIsLoginInputActive(false);
                  }}
                  onChangeText={(value) =>
                    setUserData((prevState) => ({ ...prevState, login: value }))
                  }
                  placeholder="Login"
                  placeholderTextColor={"#BDBDBD"}
                />
                <TextInput
                  style={{
                    ...styles.input,
                    backgroundColor: isEmailInputActive ? "#FFFFFF" : "#F6F6F6",
                    borderColor: isEmailInputActive ? "#FF6C00" : "#E8E8E8",
                  }}
                  value={userData.email}
                  onFocus={() => {
                    setIsKeyboardShown(true);
                    setIsEmailInputActive(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardShown(false);
                    setIsEmailInputActive(false);
                  }}
                  onChangeText={(value) =>
                    setUserData((prevState) => ({ ...prevState, email: value }))
                  }
                  placeholder="Email"
                  placeholderTextColor={"#BDBDBD"}
                />
                <TextInput
                  style={{
                    ...styles.last_input,
                    backgroundColor: isPasswordInputActive
                      ? "#FFFFFF"
                      : "#F6F6F6",
                    borderColor: isPasswordInputActive ? "#FF6C00" : "#E8E8E8",
                  }}
                  value={userData.password}
                  onFocus={() => {
                    setIsKeyboardShown(true);
                    setIsPasswordInputActive(true);
                  }}
                  onBlur={() => {
                    setIsKeyboardShown(false);
                    setIsPasswordInputActive(false);
                  }}
                  onChangeText={(value) =>
                    setUserData((prevState) => ({
                      ...prevState,
                      password: value,
                    }))
                  }
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor={"#BDBDBD"}
                />
                <TouchableOpacity
                  onPress={onFormSubmit}
                  activeOpacity={0.7}
                  style={styles.btn}
                >
                  <Text style={styles.btn_text}>Sign up</Text>
                </TouchableOpacity>
                <View
                  style={{
                    ...styles.text_wrapper,
                    marginBottom: isKeyboardShown
                      ? -100
                      : Math.floor(dimensions.screen.height / 10.5),
                  }}
                >
                  <Text style={styles.text}>
                    Already have an account? Login
                  </Text>
                </View>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#575757",
  },
  imageBG: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  white_bg: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  img_input: {
    position: "absolute",
    top: -60,
    left: 132,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  img_plus: {
    position: "absolute",
    right: -14,
    bottom: 12,
    height: 30,
    width: 30,
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    color: "#212121",
  },
  form: {
    // marginHorizontal: 16,
  },
  input: {
    height: 50,
    marginBottom: 16,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  last_input: {
    height: 50,
    marginBottom: 43,
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  btn: {
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btn_text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFFFFF",
  },
  text_wrapper: {
    alignItems: "center",
    marginTop: 16,
    // marginBottom: 79,
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});
