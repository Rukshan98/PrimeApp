import { View, Text, StyleSheet } from "react-native";
import React, { useState, useCallback } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useFocusEffect } from "@react-navigation/native";

import { getComodity } from "../services/Comodity";

const ComodityDropDown = (props) => {
  const [commodity, setComodity] = useState([]);
  const [selectedCommodity, setSelectedCommodity] = useState("");

  const getData = () => {
    getComodity(props.token)
      .then((response) => {
        setComodity(response.data.data);
      })
      .catch(console.error);
  };

  const forCommodity = () => {
    for (i = 0; i < commodity.length; i++) {
      if (commodity[i].en_name == selectedCommodity) {
        props.commodityId(i + 1);
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
      <Text style={styles.text}>Commodity</Text>
      <SelectList
        setSelected={(value) => {
          setSelectedCommodity(value);
        }}
        onSelect={() => forCommodity()}
        data={commodity.map((item) => {
          return { key: item.commodity_id, value: item.en_name };
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
    fontFamily: "Poppins",
    marginVertical: 10,
    color: "#2F679B",
  },
  list: {
    color: "#2F679B",
  },
});

export default ComodityDropDown;
