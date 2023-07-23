import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'

const CustomTextInput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.feildName}</Text>
      <TextInput
      style={styles.textInputContainer}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  },
  textInputContainer:{
    // backgroundColor:'red',
    borderColor:'#2F679B',
    borderWidth:1,
    height:responsiveHeight(5),
    borderRadius:8
  },
  text:{
    fontFamily:'Poppins',
    marginVertical:10,
    color:'#2F679B',

  }
})
export default CustomTextInput