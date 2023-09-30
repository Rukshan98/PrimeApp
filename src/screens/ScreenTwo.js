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
    <View
    
      style={styles.container}
    >
      <StatusBar backgroundColor="rgba(250, 196, 18, 0.905) 0)" barStyle="dark-content" />
      <CustomBackButton navigation={() => props.navigation.goBack()} heading="Shipment Details" />
      {/* <SubHeader heading="Shipment Details" /> */}
   <View style={styles.container2}>
   <ScrollView showsVerticalScrollIndicator={false}>
        <ServiceDropDown token={token} serviceId={setServiceId} service={setService}/>
     




        <PackageDropDown token={token} packageId={setPackageId} package={setPackage}/>
        <ComodityDropDown token={token} commodityId={setCommodityId} commodity={setCommodity}/>
        <CustomTextInput feildName="Weight -(kg)" value={setWeight}   numberpad={true}/>
        <CustomTextInput feildName="Quantity" value={setqty}   numberpad={true}/>
        <CalculateWeight volumetric={setVolWeight} H={setHeight}  W={setWidth} L={setlength}/>
        <CustomButton name="Next" navigation={() => validate()} />
      </ScrollView>

   </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 15,
    // paddingHorizontal: responsiveWidth(3),
    backgroundColor:'white'
  },
  container2:{
    flex: 1,
    paddingBottom: 15,
    paddingVertical:30,
    paddingHorizontal: responsiveWidth(3),
    backgroundColor:'white'
  }
});

export default ScreenTwo;
