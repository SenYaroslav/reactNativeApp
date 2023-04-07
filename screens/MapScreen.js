import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({ route }) {
  const { latitude, longitude } = route.params.posts[0].location;

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.005,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title="travel photo" />
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
