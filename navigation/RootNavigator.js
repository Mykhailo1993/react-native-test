import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DeatilScreen from "../screens/DetailScreen";

export const RootNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Countries" component={HomeScreen} />
        <Stack.Screen name="Details" component={DeatilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
