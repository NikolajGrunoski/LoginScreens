import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login2 from './screens/Login2';
import Screen1 from './screens/screen1';
import { createStackNavigator } from 'react-navigation-stack';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

class App extends React.Component {
  render(
    createHomeStack = () =>
      <Stack.Navigator>
        <Stack.Screen name='Feed' component={Screen1} />
      </Stack.Navigator>
  ) {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Home' />
          <Drawer.Screen name='Login2' component={Login2} />
          <Drawer.Screen name='Login3' />
          <Drawer.Screen name='Login4' />
        </Drawer.Navigator>
      </NavigationContainer>

    )

  }
}



export default App;
