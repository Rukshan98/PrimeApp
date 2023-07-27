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
  SubHeader,
  CustomBackButton,
  CountryDropDown,
  StateDropDown,
  SalesDropDown,
} from "../components";

const SubmitScreen = (props) => {
  const token = props.route.params.tokenId;

  const [salesId, setSalesId] = useState();
  console.log("sales id-->", salesId);
  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 0)", "rgba(25, 39, 68, 0.39)"]}
      style={styles.container}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CustomBackButton navigation={() => props.navigation.goBack()} />
      <SubHeader heading="Summary" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SalesDropDown token={token} salesId={setSalesId} />

        <CustomButton name="Next" navigation={() => null} />
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

export default SubmitScreen;
