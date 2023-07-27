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
} from "../components";

const ScreenThree = (props) => {
  const token = props.route.params.tokenId;

  const [oCountryId, setOCountryId] = useState();
  console.log("Origin country id--->", oCountryId);
  const [oState, setOState] = useState();
  console.log("Origin State id--->", oState);
  const [dCountryId, setDCountryId] = useState();
  console.log("destination country id--->", dCountryId);
  const [dState, setDState] = useState();
  console.log("destination State id--->", dState);
  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 0)", "rgba(25, 39, 68, 0.39)"]}
      style={styles.container}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CustomBackButton navigation={() => props.navigation.goBack()} />
      <SubHeader heading="Location Details" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CountryDropDown
          token={token}
          countryId={setOCountryId}
          name="Origin Country"
        />
        {oCountryId == undefined ? (
          <></>
        ) : (
          <StateDropDown
            token={token}
            cId={oCountryId}
            stateId={setOState}
            name="Origin State"
          />
        )}
        <CountryDropDown
          token={token}
          countryId={setDCountryId}
          name="Destination Country"
        />
        {dCountryId == undefined ? (
          <></>
        ) : (
          <StateDropDown
            token={token}
            cId={dCountryId}
            stateId={setDState}
            name="Destination State"
          />
        )}

        <CustomButton
          name="Next"
          navigation={() => props.navigation.navigate(Screens.SUBMIT_SCREEN,{ tokenId: token })}
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
export default ScreenThree;
