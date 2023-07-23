import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";

const CustomDropDown = (props) => {
  return (
    <View>
        <Text style={styles.text}>Destination</Text>
           <SelectList
      //  setSelected={(value) => {

      //   }}
      //   onSelect={() => forDestination()}
      //   data={country.map((item) => {
      //     return { key: item.country_id, value: item.name };
      //   })}
      //   save="value"
      boxStyles={styles.container}
      fontFamily="Poppins"
    //   inputStyles={styles.list}
      // placeholder="Destination Country"
    />

    </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius:8,
    borderColor: "#2F679B",
    height: 50,
    marginVertical: 5,
  },
  text:{
    fontFamily:'Poppins',
    marginVertical:10,
    color:'#2F679B'
  }
});

export default CustomDropDown;
