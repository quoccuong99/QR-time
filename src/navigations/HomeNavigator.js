import React from 'react';
import HomeScreen from '../screens/Home';
import ToDayScreen from '../screens/ToDay';

// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { transform } from '@babel/core';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
    return (

        <Tab.Navigator
            // tabBarOptions={{ activeTintColor: "#1d8efc", inactiveTintColor: "#626262" }}
            tabBarOptions={{
                activeTintColor: '#1d8efc',
                inactiveTintColor: '#626262',
                // activeBackgroundColor: '#c4461c',
                // inactiveBackgroundColor: '#b55031',
                style: {
                    backgroundColor: "#1b1b1b",
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    height: 90,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Hôm nay',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Hôm nay"
                component={ToDayScreen}
                options={{
                    tabBarLabel: 'Thống kê',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),

                }}
            />
        </Tab.Navigator>
    );
};

export default HomeNavigator;
