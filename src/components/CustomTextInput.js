import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { responsiveHeight,responsiveFontSize } from "react-native-responsive-dimensions";
import { useSafeAreaFrame } from "react-native-safe-area-context";



const CustomTextInput = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.feildName}</Text>
      <TextInput
        value={props.data}
        style={styles.textInputContainer}
     
        keyboardType={props.numberpad ? 'numeric' : 'default'}
        onChangeText={(value) => props.value(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textInputContainer: {
    // backgroundColor:'red',
    borderColor: "grey",
    borderWidth: 1,
    height: responsiveHeight(5.5),
    borderRadius: 8,
    color: "#000",
    padding: 5,
    // elevation:5
  },
  text: {
    fontFamily: "Poppins",
    marginTop:10,
    marginBottom:3,
    // color: "#000",
    fontSize:responsiveFontSize(2)
  },
});
export default CustomTextInput;
