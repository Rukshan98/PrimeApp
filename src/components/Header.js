import { View, Text, StyleSheet, Image,Platform } from "react-native";
import React from "react";
import {
  responsiveFontSize,
  responsiveHeight,
} from "react-native-responsive-dimensions";

const Header = () => {
  return (
    <View>
        <View style={styles.fill}/>
        <View style={styles.container}>
    
    <Image
      source={require("../../assets/New-logo-Prime.png")}
      style={styles.headerImage}
    />
  </View>
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    marginBottom:50,
  },
  headingText: {
    fontFamily: "PoppinsB",
    marginVertical: 10,
    fontSize:responsiveFontSize(5),
    color: "#2F679B",
  },
  headerImage: {
    flex: 1,
    height: 100,
    resizeMode: "contain",
    marginRight:40
  },
  fill:{
    paddingTop:Platform.OS == "ios" ? 50 : 10,
    paddingBottom:Platform.OS == "ios" ? 20 : 10,
    height:10,
    width:'100%',
    backgroundColor:'rergba(250, 196, 18, 0.905) 0)d'
  }
});

export default Header;
