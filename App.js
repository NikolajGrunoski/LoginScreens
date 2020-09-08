import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import logoscreen from './Media/vk-logo.png'
import facebook from './Media/facebook.png'
import twitter from './Media/twitter.png'
import mail from './Media/message.png'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login2 from './Login2'

class App extends React.Component {

  static navigationOptions = {
    header: null
  }

  goToDashboard = () => {
    this.props.navigation.navigate('Login2');
  }
  render() {
    return (
      <View className='Container'>
        <View style={styles.logoContainer}>
          <Image source={logoscreen} style={styles.logo} ></Image>
        </View>

        <View >
          <Text style={styles.logoText}>Welcome</Text>
        </View>

        <View style={styles.selectButtons}>
          <TouchableOpacity style={styles.text1}>
            <Text style={styles.text3}>Login </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.text2}>
            <Text style={styles.text3}>Signup </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.email}>Email Adress</TextInput>
          <TextInput style={styles.password}>Password </TextInput>
          {/* <i><ion-icon name="eye-outline"></ion-icon></i> */}


          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textBtn}>Log in</Text>
          </TouchableOpacity>



        </View>
        <TouchableOpacity >
          <Text style={styles.txtForgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <View>

        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginLeft: 40,
            marginRight: 40
          }}
        />

        <View style={styles.social}>

          <Image source={facebook} style={styles.social2} ></Image>
          <Image source={twitter} style={styles.social2}></Image>
          <Image source={mail} style={styles.social2}></Image>

        </View>

        <TouchableOpacity  onPress={this.goToDashboard}>

         

          <Text style={styles.text}>Log in with Facebook</Text>

        </TouchableOpacity>
      </View>

    )

  }
}

const AppNavigator = createStackNavigator({
  Home: {
    Screen: App
  },
  Login2: {
    Screen: Login2
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
    width: 200,
    height: 150,
  },
  logoText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 50,
    fontStyle: 'normal',
    marginBottom: 25
  },
  selectButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text1: {
    justifyContent: 'center',
    height: 50,
    width: 180,
  },
  text2: {
    justifyContent: 'center',
    height: 50,
    width: 180,
  },
  text3: {
    textAlign: 'center',
    fontSize: 20,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  email: {
    borderWidth: 0.5,
    borderRadius: 2,
    height: 50,
    width: 300,
    marginBottom: 25,
    paddingLeft: 20
  },
  password: {
    borderWidth: 0.5,
    borderRadius: 2,
    height: 50,
    width: 300,
    paddingLeft: 20
  },
  btnLogin: {
    width: 300,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 15
  },
  textBtn: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  txtForgot: {
    color: '#4285F4',
    textAlign: 'left',
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 10
  },
  social: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  social2: {
    height: 30,
    width: 30,
    margin: 10
  }
});

export default createAppContainer(AppNavigator);
