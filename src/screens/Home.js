import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';


const Home = ({ navigation }) => {
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text>Home Screen</Text>
        //     <Button title="Go to to day" onPress={() => navigation.navigate('ToDay')}/>
        // </View>
        <View style={styles.container}>
            <SafeAreaView>
                <Text>hello</Text>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b1b1b",
    }
})



export default Home;
