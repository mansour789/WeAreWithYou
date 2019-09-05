import React from "react";
import { Text, View, Platform, Image } from "react-native";


import Navigations from './src/Navigations'
export default class App extends React.Component {
  state ={
    
  }
  render() {
    return (
      
        <Navigations style={styles.container}/>
   
     
      
    );
  }
}

const styles = {
  container: {
    
    marginTop: Platform.OS === "android" ? 24 : 0
  }
};
