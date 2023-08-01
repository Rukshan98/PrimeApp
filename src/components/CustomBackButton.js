import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";


import { responsiveFontSize } from 'react-native-responsive-dimensions'
const CustomBackButton = (props) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.container2}>
      <TouchableOpacity onPress={props.navigation}>
        <Ionicons name="chevron-back-outline" size={35} color="#2F679B" />
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
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row",
  },
  container2:{
    justifyContent:'center',
    alignItems:'center',
    // marginBottom:20,
    
},
text:{
    fontFamily:'PoppinsB',
    color: "#2F679B",
    fontSize:responsiveFontSize(3),

},
textContainer:{
flex:1,
justifyContent:'center',
alignItems:'center',
paddingRight:10
}
});
export default CustomBackButton;
