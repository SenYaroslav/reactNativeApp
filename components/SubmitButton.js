import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function SubmitButton({ title, onFormSubmit }) {
  return (
    <TouchableOpacity
      onPress={onFormSubmit}
      activeOpacity={0.7}
      style={styles.btn}
    >
      <Text style={styles.btn_text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
