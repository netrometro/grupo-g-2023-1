import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home/index";
import AuthScreen from "./src/pages/AuthScreen/index";
import Notifications from "./src/pages/Notifications";
import Profile from "./src/pages/Profile";
import Gifts from "./src/pages/Gifts";
import Navbar from "./src/components/Navbar";
import EcoRank from "./src/pages/EcoRank";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Gifts" component={Gifts} />
        <Stack.Screen name="EcoRank" component={EcoRank} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
