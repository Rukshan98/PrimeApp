import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Screens } from "../constants";

const ScreenOne = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <TouchableOpacity onPress={()=>props.navigation.navigate(Screens.SCREEN_TWO)}>
        <Text>ScreenOne</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenOne;
