import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';
import{NavigationContainer} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from './src/pages/home';
import Produtos from './src/pages/produtos'


const Drawer = createDrawerNavigator();


const App = () => {
  componentDidMount = async () =>{
    await AsyncStorage.clear();

    const token = await AsyncStorage.getItem('senha');
    const usuario = JSON.parse(await AsyncStorage.getItem('usuario')) || null;

    if (token && usuario) 
      this.setState({ loggedInUser: usuario });
  }
  signIn = async () => {
    try {
      const response = await api.post('/login/logar', {
        usuario: 'ANDREIA',
        senha: '123',
      });

      const { token, usuario } = response.data;

      await AsyncStorage.multiSet([
        ['token', '123456'],
        ['usuario', JSON.stringify(usuario)],
      ]);

      this.setState({ loggedInUser: usuario });

      Alert.alert('Logado com sucesso!');
    } catch (err) {
      //this.setState({ errorMessage: err.data.error });
      console.log(err)
    }
  };
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home}></Drawer.Screen>
        <Drawer.Screen name='Produtos' component={Produtos}></Drawer.Screen>
        {/* <Drawer.Screen contentComponent={CustomDrawer}></Drawer.Screen> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;