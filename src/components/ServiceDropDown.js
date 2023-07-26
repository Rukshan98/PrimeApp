import { View, Text, StyleSheet } from "react-native";
import React, { useState, useCallback } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { useFocusEffect } from "@react-navigation/native";

import { getServices } from "../services/Services";

const ServiceDropDown = (props) => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");

  const getData = () => {
    getServices(props.token)
      .then((response) => {
        setServices(response.data.data);
        // console.log('service array - >',response.data.data)
      })
      .catch(console.error);
  };

  // const forService = () => {
  //   for (i = 0; i < services.length; i++) {
  //     if (services[i].en_name == selectedService) {
  //       props.serviceId(i + 1);
  //       return;
  //     }
  //   }
  // };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  return (
    <View>
      <Text style={styles.text}>Service</Text>
      <SelectList
        setSelected={(value) => {
          props.serviceId(value);
          // setSelectedService(value);
        }}
        onSelect={() => forService()}
        data={services.map((item) => {
          return { key: item.service_id, value: item.en_name };
        })}
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

export default ServiceDropDown;
