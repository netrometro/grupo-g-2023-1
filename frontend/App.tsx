import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import AuthScreen from "./src/pages/AuthScreen";
import Notifications from "./src/pages/Notifications";
import Profile from "./src/pages/Profile";
import Gifts from "./src/pages/Gifts";
import EcoRank from "./src/pages/EcoRank";
import { LockScreenParamList } from "./src/types/PagesTypeList"; // Adjust the import path
import { navigationRef } from "./src/components/Navbar/NavigationService";
import Navbar from "./src/components/Navbar";
import { useRoute } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

function App() {
  const route = useRoute();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="AuthScreen"
        screenOptions={{ headerShown: false, animation: "slide_from_bottom" }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Gifts" component={Gifts} />
        <Stack.Screen name="EcoRank" component={EcoRank} />
      </Stack.Navigator>
      {route.name === "AuthScreen" ? <></> : <Navbar />}
    </NavigationContainer>
  );
}

export default App;
