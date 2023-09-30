import { View, Text, TouchableOpacity, StyleSheet,Platform } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { responsiveFontSize } from "react-native-responsive-dimensions";
const CustomBackButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity onPress={props.navigation}>
          <Ionicons name="arrow-back-outline" size={25} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.heading}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:Platform.OS == "ios" ? 50 : 10,
    paddingBottom:Platform.OS == "ios" ? 20 : 10,
    flexDirection: "row",
    backgroundColor: "rgba(250, 196, 18, 0.905) 0)",
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft:10,
    
  },
  text: {
    fontFamily: "Poppins",
    color: "#000",
    fontSize: responsiveFontSize(2.5),
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 35,

  },
});
export default CustomBackButton;
