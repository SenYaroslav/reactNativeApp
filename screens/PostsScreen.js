import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PostsScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log("posts > > > > ", posts);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.avatarPlaceholder}></View>
        <View>
          <Text style={styles.userName}>Yaroslav Seniuk</Text>
          <Text style={styles.userEmail}>yaroslavseniuk@example.com</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.image} source={{ uri: item.photo }} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.infoWrapper}>
              <TouchableOpacity
                style={styles.commentsWrapper}
                onPress={() => navigation.navigate("CommentsScreen")}
              >
                <Ionicons name="chatbubble-outline" size={24} color="#BDBDBD" />
                <Text style={styles.numberOfComments}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.locationWrapper}
                onPress={() => navigation.navigate("MapScreen")}
              >
                <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                <Text style={styles.locationText}>
                  {item.locationFromInput}
                </Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  userInfo: {
    marginVertical: 32,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatarPlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "#212121",
  },
  userName: {
    fontFamily: "Roboto-Medium",
    fontWeight: 700,
    fontSize: 13,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    color: "#212121 rgba(33, 33, 33, 0.8)",
  },
  image: {
    width: "100%",
    height: 240,
    marginBottom: 8,
    borderRadius: 8,
  },
  title: { fontFamily: "Roboto-Medium", fontSize: 16 },
  infoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 32,
  },
  commentsWrapper: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    justifyContent: "space-between",
  },
  numberOfComments: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  locationWrapper: {
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    justifyContent: "space-between",
  },
  locationText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#212121",
  },
});
