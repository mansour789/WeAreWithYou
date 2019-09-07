import React from "react";
import { Text, View, AsyncStorage } from "react-native";
import { Button } from "native-base";
import SpinnerLoading from '../../SpinnerLoading'

import { Container, Header, Content, ListItem,  Radio, Right, Left } from 'native-base';
export class AccountScreen extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    // this.getToken = this.getToken.bind(this);
  }
  
  
  async saveToken() {
    try {
      await AsyncStorage.setItem("access_token", "");
      alert("change")
    } catch (error) {
      console.log("somthing wrong" + error);
    }
  }
  

  render() {
    return (
      <View style={styles.viewStyle}>
        <Button block style={styles.buttonStyle} onPress={() => this.saveToken()}>
          <Text style={styles.buttonText}>ACOUNNNNT</Text>
        </Button>
        <SpinnerLoading />
      </View>

      

     

    );
  }
}

export default AccountScreen;

const styles = {
  viewStyle: {
    marginTop: 100,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "blue",
    alignItems: "center"
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: "white"
  }
};



