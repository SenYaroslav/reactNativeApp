import React, { useState } from "react";
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
} from "react-native";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [userData, setUserData] = useState(initialState);

  const keyboardHide = () => {
    Keyboard.dismiss();
  };

  const onFormSubmit = () => {
    console.log(userData);
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
            <View style={styles.form}>
              <TextInput
                style={styles.input}
                value={userData.login}
                onChangeText={(value) =>
                  setUserData((prevState) => ({ ...prevState, login: value }))
                }
                placeholder="Login"
              />
              <TextInput
                style={styles.input}
                value={userData.email}
                onChangeText={(value) =>
                  setUserData((prevState) => ({ ...prevState, email: value }))
                }
                placeholder="Email"
              />
              <TextInput
                style={styles.last_input}
                value={userData.password}
                onChangeText={(value) =>
                  setUserData((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
                placeholder="Password"
              />
              <TouchableOpacity
                onPress={onFormSubmit}
                activeOpacity={0.7}
                style={styles.btn}
              >
                <Text style={styles.btn_text}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.text_wrapper}>
              <Text style={styles.text}>Already have an account? Login</Text>
            </View>
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
    height: 550,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
    marginHorizontal: 16,
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
    marginTop: 43,
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
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});
