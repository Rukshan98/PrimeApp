import { View, Text, StyleSheet, TextInput } from "react-native";
import React,{useState} from "react";
import { responsiveHeight,responsiveFontSize } from "react-native-responsive-dimensions";

const CalculateWeight = (props) => {
    const [length,setLength] = useState()
    const [width,setWidth] = useState()
    const [height,setHeight] = useState()
    const [total,setTotal] = useState('0')

    const VolumetricWeight = () => {
        let weight = (length * width * height) / 5000;
        props.volumetric(weight)
        props.H(height)
        props.W(width)
        props.L(length)
        setTotal(weight)
     
      };
  return (
    <View style={styles.container}>
      
      <View style={styles.containertwo}>
      <Text style={styles.text}>Volumetric Weight:</Text>
      <Text style={styles.weightText}>{total}kgs</Text>
      </View>
        <View style={styles.containerThree}>
          <TextInput
            style={styles.textInput}
            placeholder="L"
            placeholderTextColor="#2F679B"
            onChangeText={(value) => setLength(value)}
            onSubmitEditing={() => VolumetricWeight()}
            keyboardType="numeric"
            value={length}
            returnKeyType="done"
          />
          <TextInput
            style={styles.textInput}
            placeholder="H"
            placeholderTextColor="#2F679B"
            onChangeText={(value) => setHeight(value)}
            onSubmitEditing={() => VolumetricWeight()}
            keyboardType="numeric"
            value={height}
            returnKeyType="done"

          />
          <TextInput
            style={styles.textInput}
            placeholder="W"
            placeholderTextColor="#2F679B"
            onChangeText={(value) => setWidth(value)}
            onSubmitEditing={() => VolumetricWeight()}
            keyboardType="numeric"
            value={width}
            returnKeyType="done"
          />
      
      

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  containertwo: {
    flexDirection:'row',
    // justifyContent:'space-between',
  },
  containerThree: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    margin: 3,
    borderRadius: 8,
    borderColor: "#2F679B",
    height: responsiveHeight(5),
    fontFamily: "Poppins",
    padding: 5,
  },
  text: {
    fontFamily: "PoppinsB",
    marginVertical: 10,
    color: "#000",
    fontSize:responsiveFontSize(2)
  },
  weightText:{
   
    fontFamily: "PoppinsB",
    marginVertical: 10,
    color: "#000",
    fontSize:responsiveFontSize(2),
    color:'red',
    textDecorationLine:'underline',
    marginLeft:5
  }
});
export default CalculateWeight;
