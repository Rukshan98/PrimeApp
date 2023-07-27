import { View, Text, StyleSheet } from "react-native";
import React, { useState, useCallback } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useFocusEffect } from "@react-navigation/native";

import { getState } from "../services/State";

const StateDropDown = (props) => {

    const [state, setState] = useState([]);
    const [selectedState, setSelectedState] = useState("");

    const getData = () => {
    
        getState(props.token,props.cId)
          .then((response) => {
            setState(response.data.states);
            // console.log('state--->',response.data.states)
          })
          .catch(console.error);
      };

    const forState = () => {
        for (i = 0; i < state.length; i++) {
          if (state[i].name == selectedState) {
            console.log('true')
            props.stateId(i + 1);
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
        setSelectedState(value);
      }}
      onSelect={() => forState()}
      data={state.map((item) => {
        return { key: item.country_id, value: item.name };
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
      fontFamily: "Poppins",
      marginVertical: 10,
      color: "#2F679B",
    },
    list: {
      color: "#2F679B",
    },
  });

export default StateDropDown