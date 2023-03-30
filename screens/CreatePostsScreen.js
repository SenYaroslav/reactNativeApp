import { Camera, CameraType } from "expo-camera";
// import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CreatePostsScreen() {
  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();

  // if (!permission) ...

  // if (!permission.granted) ...

  // function toggleCameraType() {
  //   setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  // }

  return (
    <View style={styles.container}>
        <Camera
          style={styles.cameraScreen}
          // type={type}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              // onPress={toggleCameraType}
            >
              <MaterialIcons name="camera-alt" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </Camera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  cameraScreen: {
    marginTop: 32,
    marginHorizontal: 16,
    height: 240,
    // borderRadius:20,
  },
  button: {
    marginTop: 90,
    marginLeft: 150,
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
});
