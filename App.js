import React from "react";
import { Text, View, Platform, Image, AsyncStorage } from "react-native";

import Navigations from "./src/Navigations";

export default class App extends React.Component {
  state = {
    
    token: "",
    username: "",
    photo: "",
    id: ''
  };
  componentDidMount() {
    this.getToken();
  }
  setUser = (token, username, photo, id) => {
    console.log("this is SET user")
    this.setState({ token, username, photo, id }); 
  };
  async getToken() {
    console.log("this. is get token")
    try {
      let token = await AsyncStorage.getItem("access_token");
      let username = await AsyncStorage.getItem("username");
      let photo = await AsyncStorage.getItem("photo");
      let id = await AsyncStorage.getItem("user_id");
      console.log(token)
      this.setState({ token, username, photo, id  }); 
    } catch (error) {
      alert(error);
    }
  }
  // componentDidUpdate = ()=>{ 
  //   this.getToken();
  // }

  render() { 
    return (
      <Navigations
        screenProps={{
          data: this.state.token,
          setUser: this.setUser,
          
          username: this.state.username,
          photo: this.state.photo,
          id: this.state.id
        }}
      />
    );
  }
}
