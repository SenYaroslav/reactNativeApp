import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <>
        <Text style={{ color: 'white', fontSize: 20}}>My first string with React Native! 🥳</Text>
      </>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#575757",
    alignItems: "center",
    justifyContent: "center",
  },
});
