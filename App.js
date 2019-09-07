import React from "react";
import { Text, View, Platform, Image, AsyncStorage } from "react-native";


import Navigations from './src/Navigations'
export default class App extends React.Component {
  state ={
    user: {},
    token: ''
  }
  componentDidMount(){
    this.getToken()
  }
  async getToken() {
    try {
     let token = await AsyncStorage.getItem("access_token");
      this.setState({token})
    } catch (error) {
     alert(error)
    }
  }
  
  render() {
    return (
      
        <Navigations  screenProps={{data: this.state.token}}  />
   
     
      
    );
  }
}

