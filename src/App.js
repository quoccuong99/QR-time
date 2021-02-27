import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import HomeNavigator from './navigations/HomeNavigator';





export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigator />

    </NavigationContainer>
  );
}
