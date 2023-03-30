import { TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import RegistrationScreen from "./screens/auth/RegistrationScreen";
import LoginScreen from "./screens/auth/LoginScreen";
import PostsScreen from "./screens/PostsScreen";
import CreatePostsScreen from "./screens/CreatePostsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={RegistrationScreen}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  const initialHeaderTitleStyle = {
    fontFamily: "Roboto-Medium",
    fontSize: 17,
    color: "#212121",
  };
  const initialBarBtnColors = {
    tabBarActiveBackgroundColor: "#FF6C00",
    tabBarActiveTintColor: "#fff",
    tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
  };
  const initialTabBarItemStyleParams = {
    borderRadius: 20,
    height: 40,
    maxWidth: 70,
    marginTop: 9,
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          alignItems: "center",
          shadowColor: "rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Tab.Screen
        options={{
          title: "Posts",
          headerTitleStyle: initialHeaderTitleStyle,
          headerTitleAlign: "center",
          headerStyle: { borderBottomWidth: 1 },
          headerRight: () => (
            <TouchableOpacity>
              <View style={{ marginRight: 10 }}>
                <MaterialIcons name="logout" size={24} color="#BDBDBD" />
              </View>
            </TouchableOpacity>
          ),
          ...initialBarBtnColors,
          tabBarItemStyle: {
            ...initialTabBarItemStyleParams,
            marginRight: 10,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialIcons name="grid-view" size={size} color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          title: "Create post",
          headerStyle: { borderBottomWidth: 1 },
          headerTitleStyle: initialHeaderTitleStyle,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <View style={{ marginLeft: 20 }}>
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color="rgba(33, 33, 33, 0.8)"
                />
              </View>
            </TouchableOpacity>
          ),
          tabBarStyle: { display: "none" },
          ...initialBarBtnColors,
          tabBarItemStyle: initialTabBarItemStyleParams,
          tabBarIcon: ({ focused, size, color }) => (
            <Fontisto name="plus-a" size={size} color={color} />
          ),
        })}
        name="Create Posts"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          ...initialBarBtnColors,
          tabBarItemStyle: {
            ...initialTabBarItemStyleParams,
            marginLeft: 10,
          },
          tabBarIcon: ({ focused, size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

export default function useRoute(isAuth) {
  if (!isAuth) {
    return <AuthStack />;
  }
  return <MyTabs />;
}
