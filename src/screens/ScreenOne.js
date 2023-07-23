import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import React, { useState, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";
import { responsiveWidth } from "react-native-responsive-dimensions";

import { Screens } from "../constants";
import {
  Header,
  CustomTextInput,
  CustomDropDown,
  CustomButton,
  ServiceDropDown,
  PackageDropDown,
} from "../components";

import { Login } from "../services/Login";

const ScreenOne = (props) => {
  const [token, setTooken] = useState();
  const [loading, setLoading] = useState(true);

  const [serviceId, setServiceId] = useState();
  console.log("the serviceID--->", serviceId);
  const [packageId, setPackageId] = useState();
  console.log("the packageID--->", packageId);

  const initial = () => {
    Login()
      .then((response) => {
        setLoading(true);
        let token = response.data.token;
        setTooken(token);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  useFocusEffect(
    useCallback(() => {
      initial();
    }, [])
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
    <LinearGradient
      colors={["rgba(255, 255, 255, 0)", "rgba(25, 39, 68, 0.39)"]}
      style={styles.container}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomTextInput feildName="Customer name" />
        <CustomTextInput feildName="Email address" />
        <CustomTextInput feildName="Contact number" />
        <ServiceDropDown token={token} serviceId={setServiceId} />
        <PackageDropDown token={token} packageId={setPackageId} />
        <CustomButton
          name="Next"
          navigation={() => props.navigation.navigate(Screens.SCREEN_TWO)}
        />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 40 : 15,
    paddingBottom: 15,
    paddingHorizontal: responsiveWidth(3),
  },
});

export default ScreenOne;
