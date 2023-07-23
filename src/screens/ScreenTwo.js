import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import { Screens } from "../constants";
import {
  CustomBackButton,
  CustomTextInput,
  CustomDropDown,
  CustomButton,
} from "../components";

const ScreenTwo = (props) => {
  return (
    <LinearGradient
    colors={["rgba(255, 255, 255, 0)", "rgba(25, 39, 68, 0.39)"]}
    style={styles.container}
  >
    <StatusBar backgroundColor="white" barStyle="dark-content" />
    <CustomBackButton navigation={() => props.navigation.goBack()}/>
    <ScrollView>
      <CustomTextInput feildName="Comodity" />
      <CustomTextInput feildName="Quantity" />
      <CustomTextInput feildName="Weight" />
      <CustomDropDown name="Service" />
      <CustomDropDown name="Package Type" />
      <CustomButton name="Next" navigation={()=>props.navigation.navigate(Screens.SCREEN_TWO)} />
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

export default ScreenTwo;
