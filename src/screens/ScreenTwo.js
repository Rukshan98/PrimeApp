import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
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
  ComodityDropDown,
  CalculateWeight,
  SubHeader,
  ServiceDropDown,
  PackageDropDown,
} from "../components";

const ScreenTwo = (props) => {
  const token = props.route.params.tokenId;
  const name = props.route.params.name;
  const email = props.route.params.email;
  const mobile = props.route.params.mobile;


  const [serviceId, setServiceId] = useState();
  const [service, setService] = useState();
  console.log("the serviceID--->", serviceId);
  console.log("the service--->", service);
  const [packageId, setPackageId] = useState();
  const [packageN, setPackage] = useState();
  console.log("the packageID--->", packageId);
  console.log("the package--->", packageN);
  const [commodityId, setCommodityId] = useState();
  const [commodity, setCommodity] = useState();
  console.log("the commodity Id--->", commodityId);
  console.log("the commodity --->", commodity);
  const [volWeight, setVolWeight] = useState();
  console.log("the volumetric weight--->", volWeight);
  const [weight, setWeight] = useState();
  const [qty, setqty] = useState();
  const [height, setHeight] = useState();
  const [width,setWidth] = useState()
  const [length,setlength] = useState()

  const validate = () => {
    if (
      serviceId == undefined ||
      packageId == undefined ||
      commodityId == undefined ||
      volWeight == undefined ||
      weight == undefined
    ) {
      alert("Please fill all feilds!!!");
    } else {
      props.navigation.navigate(Screens.SCREEN_THREE, {
        name: name,
        email: email,
        mobile: mobile,
        serviceId: serviceId,
        packageId: packageId,
        commodityId: commodityId,
        volWeight: volWeight,
        weight: weight,
        service:service,
        package:packageN,
        commodity:commodity,
        qty:qty,
        tokenId: token,
        height:height,
        width:width,
        length:length
      });
    }
  };

  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 0)", "rgba(25, 39, 68, 0.39)"]}
      style={styles.container}
    >
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <CustomBackButton navigation={() => props.navigation.goBack()} heading="Shipment Details" />
      {/* <SubHeader heading="Shipment Details" /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ServiceDropDown token={token} serviceId={setServiceId} service={setService}/>
        <PackageDropDown token={token} packageId={setPackageId} package={setPackage}/>
        <ComodityDropDown token={token} commodityId={setCommodityId} commodity={setCommodity}/>
        <CustomTextInput feildName="Weight -(kg)" value={setWeight}   numberpad={true}/>
        <CustomTextInput feildName="Quantity" value={setqty}   numberpad={true}/>
        <CalculateWeight volumetric={setVolWeight} H={setHeight}  W={setWidth} L={setlength}/>
        <CustomButton name="Next" navigation={() => validate()} />
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
