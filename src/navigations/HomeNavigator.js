import React from 'react';
import HomeScreen from '../screens/Home';
import ToDayScreen from '../screens/ToDay';

// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ToDay" component={ToDayScreen} />
        </Stack.Navigator>
    );
};

export default HomeNavigator;
