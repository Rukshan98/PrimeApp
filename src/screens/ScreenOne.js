import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  TextInput,
} from "react-native";
import React, { useState, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";


import { Screens } from "../constants";
import {
  Header,
  CustomTextInput,
  CustomDropDown,
  CustomButton,
  ServiceDropDown,
  PackageDropDown,
  SubHeader,
  ProductType
} from "../components";

import { Login } from "../services/Login";

const ScreenOne = (props) => {
  const [token, setTooken] = useState();
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState();
  // console.log("the name--->", name);
  const [email, setEmail] = useState();
  // console.log("the Email--->", email);
  const [mobile, setMobile] = useState();
  // console.log("the Mobile--->", email);
  const [product, setproduct] = useState();
    console.log("the product type--->", product);

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
    if (name == undefined || email == undefined || mobile == undefined) {
      // return alert("Please fill all feilds!!!");
      props.navigation.navigate(Screens.SCREEN_TWO, { tokenId: token })
    } else {
      props.navigation.navigate(Screens.SCREEN_TWO, {
        name: name,
        email: email,
        mobile: mobile,
        product: product,
        tokenId: token,
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
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(250, 196, 18, 0.905) 0)" barStyle="dark-content" />
      <Header />
      {/* <SubHeader heading='Customer Details'/> */}
      <View style={styles.container2}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomTextInput feildName="Name" value={setName} data={name} />

        {/* <View>
          <Text style={styles.text}>Email</Text>
          <TextInput
            value={email}
            style={styles.textInputContainer}
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(value) => {
              setEmail(value);
              handleValidEmail(value);
            }}
          />
        </View> */}
        <CustomTextInput
          feildName="Email"
          value={setEmail}
          data={email}
        />
        <CustomTextInput
          feildName="Mobile"
          value={setMobile}
          data={mobile}
          numberpad={true}
        />

        <ProductType
        theType={setproduct}
        
        />

        <CustomButton name="Get a Quote" navigation={() => validate()} />
      </ScrollView>

      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "ios" ? 40 : 15,
    paddingBottom: 15,
    // paddingHorizontal: responsiveWidth(5),
    backgroundColor: "white",
  },
  textInputContainer: {
    // backgroundColor:'red',
    borderColor: "grey",
    borderWidth: 1,
    height: responsiveHeight(5),
    borderRadius: 8,
    color: "#000",
    padding: 5,
    // elevation:5
  },
  text: {
    fontFamily: "Poppins",
    marginTop: 10,
    marginBottom: 3,
    // color: "#000",
    fontSize: responsiveFontSize(2),
  },
  container2:{
    flex: 1,
    paddingBottom: 15,

    paddingHorizontal: responsiveWidth(5),
    backgroundColor:'white'
  }
});

export default ScreenOne;
