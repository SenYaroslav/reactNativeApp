import { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { auth } from "./firebase/config";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState(null)
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-400-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-500-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  auth.onAuthStateChanged((user) => setUser(user));
  // console.log('user in App.js > > > > ', user)

  const routing = useRoute(user);

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>{routing}</NavigationContainer>
      </View>
    </Provider>
  );
}
