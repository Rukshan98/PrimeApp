import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { loadAsync } from "expo-font";



const CustomButton = (props) => {

  loading = false;
  return (
    <TouchableOpacity style={styles.container} onPress={props.navigation}>
      {loading ? (
        <ActivityIndicator
          color="white"
          size={30}
          style={{ alignItems: "center", flex: 1 }}
        />
      ) : (
        <Text style={styles.textStyle}>{props.name}</Text>
      )}
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
    marginVertical: 50,
  },
  textStyle: {
    color: "#fff",
    fontFamily: "Poppins",
    fontSize: responsiveFontSize(2.5),
  },
});

export default CustomButton;
