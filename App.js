import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import ToDayScreen from './src/modules/toDay/screen/ToDayScreen';





export default function App() {
  return (
    <NavigationContainer>
      <ToDayScreen />

    </NavigationContainer>
  );
}
