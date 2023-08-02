import { View, Text, StyleSheet,ActivityIndicator } from "react-native";
import React, { useState, useCallback } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useFocusEffect } from "@react-navigation/native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

import { getState } from "../services/State";

const DStateDropDown = (props) => {
    const [state, setState] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [loading,setLoading] = useState(true)

    const countryId = props.cId;

    const getData = () => {
      console.log('this is the country ID========>',countryId)
    setLoading(true)
        getState(props.token,countryId)
          .then((response) => {
            setState(response.data.states);
            console.log('state destination----------->',response.data.states)
          })
          .catch(console.error).finally(setLoading(false));
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
        }, [countryId])
      );

      if (loading) {
        return (
          <ActivityIndicator
            color="#192744"
            size={30}
            style={{ alignItems: "center", flex: 1 }}
          />
        );
      }


  return (
    <View>
    <Text style={styles.text}>{props.name}</Text>
    <SelectList
      setSelected={(value) => {
        setSelectedState(value);
        props.state(value)
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
      fontFamily: "PoppinsB",
      marginVertical: 10,
      color: "#000",
      fontSize:responsiveFontSize(2)
    },
    list: {
      color: "#2F679B",
    },
  });

export default DStateDropDown