import React from 'react';
import { View, Text, Button } from 'react-native';


const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to to day"
                onPress={() => navigation.navigate('ToDay')}
            />
        </View>
    );
};


export default Home;
