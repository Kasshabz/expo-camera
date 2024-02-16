import BarCodeScan from "./Componnents/BarcodeScanner";
import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Componnents/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Profile" }}
        />
        <Stack.Screen name="BarCodeScan" component={BarCodeScan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("Appname", () => App);
