import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens";
import { Colors } from "./utils";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: Colors.primaryGreen,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.backgroundBeige,
          },
        }}
      >
        <Stack.Screen name="Maestro Blog" component={HomeScreen} />
        <Stack.Screen name="Detail Screen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
