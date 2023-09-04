import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import EcoRank from "./src/pages/EcoRank";
import AuthScreen from "./src/pages/AuthScreen";
import Navbar from "./src/components/Navbar";
import { AuthScreenProps } from "./src/types/PagesTypeList";
import UserProfile from "./src/pages/UserProfile";
import Calculator from "./src/pages/Calculator";
import EcoHints from "./src/pages/EcoHints";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EcoHints" component={EcoHints} />
        <Stack.Screen name="EcoRank" component={EcoRank} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Calculator" component={Calculator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
