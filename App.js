const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer,TransitionPresets} from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import Splash from "./screens/Splash";
import Splash2 from "./screens/Splash2";
import Notifications from "./screens/Notifications";
import Services from "./screens/Services"
import Message from "./screens/Message";

import ChatBot from "./screens/ChatBot";
import Search from "./screens/Search";
import MentalHealthProfessionalsScreen from "./screens/MentalHealthProfessionalsScreen"

import BottomTabBarScreen from './components/bottomTabBarScreen';
import AsyncStorage  from "@react-native-async-storage/async-storage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegiterScreen";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    
  'SF-Compact-Display-Regular': require('./assets/fonts/SF-Compact-Display-Regular.ttf'),
  'SF-Compact-Display-Bold': require('./assets/fonts/SF-Compact-Display-Bold.ttf'),
  'SF-Compact-Display-Medium': require('./assets/fonts/SF-Compact-Display-Medium.ttf'),
  });

  if (!fontsLoaded && !error) {
    return null;
  }
const Authentication=AsyncStorage.getItem('Token');
  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
             <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash2"
              component={Splash2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
          <Stack.Screen
          name="BottomTabBarScreen"
          component={BottomTabBarScreen}
        />
        <Stack.Screen
          name="Services"
          component={Services}
        />
        
        <Stack.Screen
          name="MentalHealthProfessionalsScreen"
          component={MentalHealthProfessionalsScreen}
        />
                <Stack.Screen
          name="Message"
          component={Message}
        />
              <Stack.Screen
          name="Search"
          component={Search}
        />
            <Stack.Screen
          name="ChatBot"
          component={ChatBot}
        />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;