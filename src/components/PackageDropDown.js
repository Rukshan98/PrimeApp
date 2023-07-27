import { View, Text, StyleSheet } from "react-native";
import React, { useState, useCallback } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useFocusEffect } from "@react-navigation/native";

import { getPackages } from "../services/Package";

const PackageDropDown = (props) => {
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState("");

    const getData = () => {
        getPackages(props.token)
          .then((response) => {
            setPackages(response.data.data);
          })
          .catch(console.error);
      };

    const forpackage = () => {
        for (i = 0; i < packages.length; i++) {
          // console.log(selectedPackage)
          if (packages[i].en_name == selectedPackage) {
            props.packageId(i + 1);
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
      <Text style={styles.text}>Package Type</Text>
      <SelectList
        setSelected={(value) => {
          setSelectedPackage(value);
          props.package(value)
        }}
        onSelect={() => forpackage()}
        data={packages.map((item) => {
          return { key: item.package_id, value: item.en_name };
        })}
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

export default PackageDropDown