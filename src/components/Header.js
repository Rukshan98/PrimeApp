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
    marginTop: 50,
    flexDirection: "row",
    marginBottom:50
  },
  headingText: {
    fontFamily: "PoppinsB",
    marginVertical: 10,
    fontSize:responsiveFontSize(5),
    color: "#2F679B",
  },
  headerImage: {
    flex: 1,
    height: 50,
    resizeMode: "contain",
    marginTop:30
  },
});

export default Header;
