import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function PostsScreen({ route }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log("posts > > > > ", posts);

  return (
    <View style={styles.container}>
      <Text>This is "PostsScreen" component!</Text>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.photo }}
              style={{ width: "100%", height: 240 }}
            />
            <Text>latitude: {item.location.coords.latitude}</Text>
            <Text>longitude: {item.location.coords.longitude}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
