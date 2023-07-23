import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import { Screens } from "../constants";
import { Header,CustomTextInput,CustomDropDown,CustomButton } from "../components";

const ScreenOne = (props) => {
  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 0)", "rgba(25, 39, 68, 0.39)"]}
      style={styles.container}
    >
      <Header />
      <CustomTextInput 
      feildName='Customer name'
      />
      <CustomTextInput 
      feildName='Email address'
      />
      <CustomTextInput 
      feildName='Contact number'
      />
      <CustomDropDown/>
      <CustomButton/>


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
