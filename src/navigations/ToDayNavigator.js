import React from 'react';

import ToDayScreen from '../screens/ToDay';
// import HomeScreen from '../screens/Home';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ToDayNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Hôm Nay" component={ToDayScreen} />
        </Stack.Navigator>
    );
};

export default ToDayNavigator;
