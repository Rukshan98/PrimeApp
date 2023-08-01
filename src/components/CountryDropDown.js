import { View, Text, StyleSheet } from "react-native";
import React, { useState, useCallback } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useFocusEffect } from "@react-navigation/native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import { getCountry } from "../services/Country";

const CountryDropDown = (props) => {

    const [country, setCountry] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");

    const getData = () => {
        getCountry(props.token)
          .then((response) => {
            setCountry(response.data.data);
            // console.log('country--->',response.data.data)
          })
          .catch(console.error);
      };

    const forCountry = () => {
        for (i = 0; i < country.length; i++) {
          if (country[i].name == selectedCountry) {
            console.log('true')
            props.countryId(i + 1);
            return;
          }
        }
      };

      useFocusEffect(
        useCallback(() => {
          getData();
        }, [])
      );

  return (
    <View>
    <Text style={styles.text}>{props.name}</Text>
    <SelectList
      setSelected={(value) => {
        setSelectedCountry(value);
        props.country(value)
      }}
      onSelect={() => forCountry()}
      data={country.map((item) => {
        return { key: item.id, value: item.name };
      })}
      save="value"
      boxStyles={styles.container}
      fontFamily="Poppins"
      inputStyles={styles.list}
      maxHeight={150}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 8,
      borderColor: "#2F679B",
      height: 50,
      marginVertical: 5,
    },
    text: {
      fontFamily: "PoppinsB",
      marginVertical: 10,
      color: "#000",
      fontSize:responsiveFontSize(2)
    },
    list: {
      color: "#2F679B",
    },
  });

export default CountryDropDown