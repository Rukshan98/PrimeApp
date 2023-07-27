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
  const name = props.route.params.name;
  const email = props.route.params.email;
  const mobile = props.route.params.mobile;
  const serviceId = props.route.params.serviceId;
  const packageId = props.route.params.packageId;
  const commodityId = props.route.params.commodityId;
  const volWeight = props.route.params.volWeight;
  const weight = props.route.params.weight;
  const service = props.route.params.service;
  const packageN = props.route.params.package;
  const commodity = props.route.params.commodity;
  const qty = props.route.params.qty;


  const [oCountryId, setOCountryId] = useState();
  const [oCountry, setOCountry] = useState();
  console.log("Origin country id--->", oCountryId);
  console.log("Origin country id--->", oCountry);
  const [oState, setOState] = useState();
  const [oStateN, setOStateN] = useState();
  console.log("Origin State id--->", oState);
  console.log("Origin State id--->", oStateN);
  const [dCountryId, setDCountryId] = useState();
  const [dCountry, setDCountry] = useState();
  console.log("destination country id--->", dCountryId);
  console.log("destination country id--->", dCountry);
  const [dState, setDState] = useState();
  const [dStateN, setDStateN] = useState();
  console.log("destination State id--->", dState);
  console.log("destination State id--->", dStateN);

  const validate = () => {
    if (
      oCountryId == undefined ||
      oState == undefined ||
      dCountryId == undefined ||
      dState == undefined
    ) {
      alert("Please fill all feilds!!!");
    } else {
      props.navigation.navigate(Screens.SUBMIT_SCREEN, {
        name: name,
        email: email,
        mobile: mobile,
        serviceId: serviceId,
        packageId: packageId,
        commodityId: commodityId,
        volWeight: volWeight,
        weight: weight,
        weight: weight,
        service:service,
        package:packageN,
        commodity:commodity,
        oCountryId : oCountryId,
        oCountry:oCountry,
        oState:oState,
        oStateN:oStateN,
        dCountryId:dCountryId,
        dCountry:dCountry,
        dState:dState,
        dStateN:dStateN,
        qty:qty,
        tokenId: token,
      });
    }
  };

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
          country={setOCountry}
          name="Origin Country"
        />
        {oCountryId == undefined ? (
          <></>
        ) : (
          <StateDropDown
            token={token}
            cId={oCountryId}
            stateId={setOState}
            state={setOStateN}
            name="Origin State"
          />
        )}
        <CountryDropDown
          token={token}
          countryId={setDCountryId}
          name="Destination Country"
          country={setDCountry}
        />
        {dCountryId == undefined ? (
          <></>
        ) : (
          <StateDropDown
            token={token}
            cId={dCountryId}
            stateId={setDState}
            state={setDStateN}
            name="Destination State"
          />
        )}

        <CustomButton
          name="Next"
          navigation={() =>
            validate()
          }
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
