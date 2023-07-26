import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useSafeAreaFrame } from "react-native-safe-area-context";

const CustomTextInput = (props) => {
  const [data, setData] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.feildName}</Text>
      <TextInput
        value={props.data}
        style={styles.textInputContainer}
        onChangeText={(value) => props.value(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  textInputContainer: {
    // backgroundColor:'red',
    borderColor: "#2F679B",
    borderWidth: 1,
    height: responsiveHeight(5),
    borderRadius: 8,
    color: "#2F679B",
    padding: 5,
  },
  text: {
    fontFamily: "Poppins",
    marginVertical: 10,
    color: "#2F679B",
  },
});
export default CustomTextInput;
