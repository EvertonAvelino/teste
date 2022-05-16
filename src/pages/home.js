import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 30
    }
});

export default Home;
