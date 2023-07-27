import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const SubHeader = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.heading}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    text:{
        fontFamily:'Poppins',
        color: "#2F679B",
        fontSize:responsiveFontSize(3),
        textDecorationLine:'underline',

    }
    
})

export default SubHeader