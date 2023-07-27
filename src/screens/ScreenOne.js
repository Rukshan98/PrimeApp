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
  SubHeader
} from "../components";

import { Login } from "../services/Login";

const ScreenOne = (props) => {
  const [token, setTooken] = useState();
  const [loading, setLoading] = useState(true);


  const [name, setName] = useState();
  console.log("the name--->", name);
  const [email, setEmail] = useState();
  console.log("the Email--->", email);
  const [mobile, setMobile] = useState();
  console.log("the Mobile--->", email);

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

  const validate = () => {
    if (
      name == undefined ||
      email == undefined ||
      mobile == undefined 
    ) {
      return alert("Please fill all feilds!!!");
      // props.navigation.navigate(Screens.SCREEN_TWO, { tokenId: token })
    } else {
      props.navigation.navigate(Screens.SCREEN_TWO, {
        name:name,
        email:email,
        mobile:mobile,
        tokenId: token
         });
    }
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
      {/* <SubHeader heading='Customer Details'/> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomTextInput
          feildName="Customer name"
          value={setName}
          data={name}
      
        />
        <CustomTextInput
          feildName="Email address"
          value={setEmail}
          data={email}
        />
        <CustomTextInput
          feildName="Contact number"
          value={setMobile}
          data={mobile}
          numberpad={true}
        />
   
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

export default ScreenOne;
