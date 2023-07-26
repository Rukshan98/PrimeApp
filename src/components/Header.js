import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Customer{"\n"}Inquiry</Text>
      <Image
        source={require("../../assets/New-logo-Prime.png")}
        style={styles.headerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    flexDirection: "row",
  },
  headingText: {
    fontSize: responsiveFontSize(3.5),
    fontFamily: "Poppins",
    color: "#2F679B",
  },
  headerImage: {
    flex: 1,
    height: 80,
    resizeMode: "stretch",
  },
});

export default Header;
