
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from '../ui/screens/home/HomeScreen'
import DetailCarScreen from '../ui/screens/detail/DetailCarScreen';

const Stack = createNativeStackNavigator()
const noToolbar = {
   headerShown : false
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen options={noToolbar} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={noToolbar} name="DetailCarScreen" component={DetailCarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator