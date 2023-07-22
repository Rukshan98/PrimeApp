import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import RootStackNavigator from "./RootStackNavigator";

const Navigation = () => {
  return (
    <NavigationContainer>
    <RootStackNavigator />
  </NavigationContainer>
  )
}

export default Navigation






