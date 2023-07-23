import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const CustomBackButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.navigation}>
        <Ionicons name="chevron-back-outline" size={42} color="#2F679B" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
  },
});
export default CustomBackButton;
