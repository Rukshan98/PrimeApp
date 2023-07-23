import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { responsiveHeight,responsiveFontSize } from "react-native-responsive-dimensions";

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.navigation}>
      <Text style={styles.textStyle}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: responsiveHeight(8),
    backgroundColor: "#192744",
    borderRadius: 10,
    marginVertical:50
  },
  textStyle: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: responsiveFontSize(2.5),
  }
});

export default CustomButton;
