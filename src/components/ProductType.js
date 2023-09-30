import { View, Text, StyleSheet } from "react-native";
import React, { useState, useCallback } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useFocusEffect } from "@react-navigation/native";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";

const ProductType = (props) => {

    const [selected, setSelected] = useState("");
    const data = [
        {key:'1', value:'Shipping', },
        {key:'2', value:'Warehousing',disabled:true},
        {key:'3', value:'Brokerage',disabled:true},
     
    ]

  return (
    <View>
    <Text style={styles.text}>Product type</Text>
    <SelectList
      setSelected={(value) => {
        setSelected(value)
        props.theType(value)
      }}
    //   onSelect={() => forCommodity()}
      data={data}
      save="value"
      boxStyles={styles.container}
      fontFamily="Poppins"
      inputStyles={styles.list}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      borderColor: "grey",
      height: responsiveHeight(6),
      marginTop:2,
      marginBottom:5
    },
    text: {
      fontFamily: "Poppins",
        marginTop:10,
      color: "#000",
      fontSize:responsiveFontSize(2)
    },
    list: {
      color: "grey",
    },
  });
export default ProductType