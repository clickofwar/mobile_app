import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginContainer from "./LoginContainer";
import SignupContainer from "./SignupContainer";
import HomeContainer from "./HomeContainer";
import PasswordContainer from "./PasswordContainer";
import SettingsContainer from "./SettingsContainer";
import TeamContainer from "./TeamContainer";

const Stack = createNativeStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginContainer} />
        <Stack.Screen name="Signup" component={SignupContainer} />
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen name="Password" component={PasswordContainer} />
        <Stack.Screen name="Settings" component={SettingsContainer} />
        <Stack.Screen name="Team" component={TeamContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
