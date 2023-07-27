import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Screens } from "../constants";
import * as ScreenSet from "../screens";

export default function RootStackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name={Screens.SCREEN_ONE} component={ScreenSet.ScreenOne} />
      <Stack.Screen name={Screens.SCREEN_TWO} component={ScreenSet.ScreenTwo} />
      <Stack.Screen name={Screens.SCREEN_THREE} component={ScreenSet.ScreenThree} />
      <Stack.Screen name={Screens.SUBMIT_SCREEN} component={ScreenSet.SubmitScreen} />
    </Stack.Navigator>
  );
}
