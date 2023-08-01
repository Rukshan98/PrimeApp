import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { responsiveHeight,responsiveFontSize } from "react-native-responsive-dimensions";
import { useSafeAreaFrame } from "react-native-safe-area-context";

const CustomLable = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>
        {props.feildName} : 
      </Text>
      <View style={styles.valueContainer}>
        <Text style={styles.text2}>{props.value}</Text>


      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection:'row',
    marginVertical: 3,
  },
  textInputContainer: {
    // backgroundColor:'red',
    borderColor: "#2F679B",
    borderWidth: 1,
    height: responsiveHeight(5),
    borderRadius: 8,
    color: "#2F679B",
    padding: 5,
  },
  text1: {
    fontFamily: "PoppinsB",
    marginVertical: 10,
    color: "#000",
    fontSize:responsiveFontSize(2)
  },
  valueContainer:{
    // width:'100%',
    borderColor: "#2F679B",
    borderWidth: 1,
    height: responsiveHeight(5),
    borderRadius: 8,
    color: "#2F679B",
    padding: 5,
  },
  text2:{
    fontFamily: "Poppins",
    marginVertical: 2,
    color: "#2F679B",
    fontSize:15
  }
});

export default CustomLable;
