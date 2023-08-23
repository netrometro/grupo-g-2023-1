import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import EcoRank from "./src/pages/EcoRank";
import Gifts from "./src/pages/Gifts";
import AuthScreen from "./src/pages/AuthScreen";
import Navbar from "./src/components/Navbar";
import { AuthScreenProps } from "./src/types/PagesTypeList";
import UserProfile from "./src/pages/UserProfile";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gifts" component={Gifts} />
        <Stack.Screen name="EcoRank" component={EcoRank} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
