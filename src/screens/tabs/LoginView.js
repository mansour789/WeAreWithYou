import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableHighlight,
  Image,
  AsyncStorage
} from "react-native";
import axios from "axios";
import apiUrl from "../../ApiConfig";
// import Navigations from "../../Navigations";

const ACCESS_TOKEN = "access_token";
const USERNAME = "username";
const PHOTO = "photo"

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      token: "",
      err: ""
    };
  }

  checkLogIn = () => {
    Keyboard.dismiss();
    const { userName, password } = this.state; 
    if (userName && password) {
      //make log in
      this.loginUser(userName, password);
    } else {
      alert("يجب تعبئة جميع الحقول");
    }
  };

  loginUser = (userName, password) => {
    screenProps = this.props.screenProps;
    axios
      .post(`${apiUrl}/sign-in`, {
        credentials: {
          username: userName,
          password: password,
          
        }
      })
      .then(res => {
        console.log(res);
        // alert(`${res.data.user.username}, ${res.data.user.token}`)
        screenProps.setUser(res.data.user)
        
        this.saveToken(res.data.user.token, res.data.user.username, res.data.user.photo);
        
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };

  async saveToken(token, user, photo) {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, token);
      await AsyncStorage.setItem(USERNAME, user);
      await AsyncStorage.setItem(PHOTO, photo);

      this.getToken();
    } catch (error) {
      console.log("somthing wrong" + error);
    }
  }
  
  async getToken() {
    try {
     let token = await AsyncStorage.getItem(ACCESS_TOKEN);
      alert(`Your TOKEN is ${token}`)
    } catch (error) {
      console.log("somthing wrong" + error);
    }
  }

  goRegister = ()=>{
    
    this.props.navigation.navigate("SignUp");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/message/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="اسم مستعار"
            // keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={userName => this.setState({ userName })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="كلمة السر"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.checkLogIn()}
        >
          <Text style={styles.loginText}>تسجيل الدخول</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={this.goRegister}
        >
          <Text style={{ color: "white" }}>إنشاء حساب</Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5F2464"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#C53364"
  },
  loginText: {
    color: "white"
  }
});

//         signUp = async () => {
//           const { username, password, email, phone_number } = this.state
//           try {
//             // here place your signup logic
//             console.log('user successfully signed up!: ', success)
//           } catch (err) {
//             console.log('error signing up: ', err)
//           }
//         }

//         onChangeText = (key, val) => {
//           this.setState({ [key]: val })
//         }
