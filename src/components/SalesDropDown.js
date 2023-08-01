import { View, Text, StyleSheet } from "react-native";
import React, { useState, useCallback } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useFocusEffect } from "@react-navigation/native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import { getSalesMan } from "../services/SalesPerson";

const SalesDropDown = (props) => {
  const [salesMan, setSalesMan] = useState([]);
  const [selectedSalesMan, setSelectedSalesMan] = useState("");

  const getData = () => {
    getSalesMan(props.token)
      .then((response) => {
        setSalesMan(response.data.data);
        // console.log('the sales men--->',response.data)
      })
      .catch(console.error);
  };

  const forSales = () => {
    for (i = 0; i < salesMan.length; i++) {
      if (
        salesMan[i].first_name + " " + salesMan[i].last_name ==
        selectedSalesMan
      ) {
        props.salesId(i + 1);
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
      <Text style={styles.text}>Sales Person</Text>
      <SelectList
        setSelected={(value) => {
          setSelectedSalesMan(value);
        }}
        onSelect={() => forSales()}
        data={salesMan.map((item) => {
          return {
            key: item.salesman_id,
            value: item.first_name + " " + item.last_name,
          };
        })}
        save="value"
        boxStyles={styles.container}
        fontFamily="Poppins"
        inputStyles={styles.list}
      />
    </View>
  );
};

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

export default SalesDropDown;
