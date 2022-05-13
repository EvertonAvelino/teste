import React, { Component, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from "@react-navigation/stack";
import api from './src/Service/Api';
import Home from './src/pages/home';

import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const Drawer = createStackNavigator();
const [redir, setRedir] = useState(false);

export default class Login extends Component {
    // signIn = async () => {
        
    //     window.location.reload('./src/pages/home')
    //     try {
    //     const response = await api.post('/login/logar', {
    //         usuario: 'ANDREIA',
    //         senha: '123',
    //     });

    //     const { token, usuario } = response.data;

    //     await AsyncStorage.multiSet([
    //         ['token', '123456'],
    //         ['usuario', JSON.stringify(usuario)],
    //     ]);

    //     this.setState({ loggedInUser: usuario });

    //     Alert.alert('Logado com sucesso!');
    //     } catch (err) {
    //     //this.setState({ errorMessage: err.data.error });
    //     console.log(err)
    //     }
    // };
    signIn = () => {
        <Redirect to={this.state.redirect} />    
    }
    async componentDidMount() {
        await AsyncStorage.clear();

        const token = await AsyncStorage.getItem('senha');
        const usuario = JSON.parse(await AsyncStorage.getItem('usuario')) || null;

        if (token && usuario) {
            this.setState({ loggedInUser: usuario });
            window.location.reload('./src/pages/home')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/* { !!this.state.errorMessage && <Text>{this.state.errorMessage}</Text> } */}
                <Button onPress={this.signIn} title="Entrar" />
            </View>
        );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});