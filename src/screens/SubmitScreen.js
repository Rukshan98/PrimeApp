import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect, useNavigationBuilder } from "@react-navigation/native";
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
  CustomLable,
  CalculateWeight,
} from "../components";

import { postBooking } from "../services/Booking";

const SubmitScreen = (props) => {
  const token = props.route.params.tokenId;
  const name = props.route.params.name;
  const email = props.route.params.email;
  const mobile = props.route.params.mobile;
  const serviceId = props.route.params.serviceId;
  const packageId = props.route.params.packageId;
  const commodityId = props.route.params.commodityId;
  const volWeight = props.route.params.volWeight;
  const weight = props.route.params.weight;
  const oCountryId = props.route.params.oCountryId;
  const oState = props.route.params.oState;
  const dCountryId = props.route.params.dCountryId;
  const dState = props.route.params.dState;
  const oCountry = props.route.params.oCountry;
  const oStateN = props.route.params.oStateN;
  const dCountry = props.route.params.dCountry;
  const dStateN = props.route.params.dStateN;
  const service = props.route.params.service;
  const packageN = props.route.params.package;
  const commodity = props.route.params.commodity;
  const qty = props.route.params.qty;
  const height = props.route.params.height;
  const width = props.route.params.width;
  const length = props.route.params.length;
  const address = props.route.params.address;

  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const time = year + "/" + month + "/" + date;
  console.log("the date:", date + "/" + month + "/" + year);

  const [salesId, setSalesId] = useState();
  console.log("sales id-->", salesId);

  const onClickSubmit = () => {
    const payload = {
      date: time,
      customer_name: name,
      email_add: email,
      address: address,
      contact_no: mobile,
      service_id: serviceId,
      commodity_id: commodityId,
      package_id: packageId,
      origin_id: oCountryId,
      o_state_id: oState,
      destination_id: dCountryId,
      d_state_id:  dState,
      quantity: qty,
      leng: length,
      width: width,
      height: height,
      weight: weight,
      remarks: "Test",
      sales_id: 1,
    };

    if (salesId == undefined) {
      alert("Please Fill all Feilds!!!");
    } else {
      postBooking(token, payload)
        .then((response) => {
          console.log("the response of the tihng===>", response.data);
          alert("Request Sent!!");
        })
        .catch(console.error)
        .finally(() => {
          props.navigation.navigate(Screens.SCREEN_ONE);
        });
    }
  };

  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 0)", "rgba(25, 39, 68, 0.39)"]}
      style={styles.container}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CustomBackButton
        navigation={() => props.navigation.goBack()}
        heading="Summary"
      />
      <SubHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomLable feildName="Customer Name" value={name} />
        <CustomLable feildName="Customer Email" value={email} />
        <CustomLable feildName="Mobile" value={mobile} />
        <CustomLable feildName="Volumetric weight" value={volWeight} />
        <CustomLable feildName="Weight" value={weight} />
        <CustomLable feildName="Quantity" value={qty} />
        <CustomLable feildName="Service" value={service} />
        <CustomLable feildName="Package type" value={packageN} />
        <CustomLable feildName="Commodity" value={commodity} />
        <CustomLable feildName="Origin" value={oCountry} />
        <CustomLable feildName="Origin State" value={oStateN == undefined ? 'Null': oStateN} />
        <CustomLable feildName="Destination" value={dCountry} />
        <CustomLable feildName="Destination State" value={dStateN == undefined ? 'Null': dStateN} />
        <CustomLable feildName="Destination address" value={address == undefined ? 'Null':address} />
        <CustomLable feildName="Height" value={height} />
        <CustomLable feildName="Width" value={width} />
        <CustomLable feildName="Length" value={length} />

        <SalesDropDown token={token} salesId={setSalesId} />
        <CustomButton name="Submit" navigation={() => onClickSubmit()} />
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
