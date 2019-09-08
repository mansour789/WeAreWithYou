import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import axios from "axios";
import apiUrl from "../../ApiConfig";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      passwordConfirmation: "",
      photo: ""
    };
    // this.regiesterUser = this.regiesterUser.bind(this);
  }

  goUignIn = ()=> {
    this.props.navigation.navigate("LoginView");
  }

   regiesterUser = (userName, password, passwordConfirmation) =>{
      
           axios.post(`${apiUrl}/sign-up`, {
            credentials: {
              username : userName,
              password : password,
              password_confirmation: passwordConfirmation
              }
          }).then(res => {
            // console.log(res)
            alert(`${res.data.user.username}, ${res.data.user.photo},`)
            // alert(`${userName}, ${password}, ${passwordConfirmation}`)
            this.setState({
              userName : res.data.user.username,
              photo: res.data.user.photo
            })

          }).catch(err => {
            console.log(err)
          })
      

  };

  signUp = () => {
    const { userName, password, passwordConfirmation } = this.state;
    if (userName && password && passwordConfirmation) {
      if (password === passwordConfirmation) {
        // make sign up

       this.regiesterUser(userName, password, passwordConfirmation);
      } else {
        alert("كلمة السر وتأكيد كلمة السر ليست متطابقة");
      }
    } else {
      alert("يجب تعبئة جميع الحقول");
    }
  };

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

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="تأكيد كلمة السر"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={passwordConfirmation =>
              this.setState({ passwordConfirmation })
            }
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.signUp()}
        >
          <Text style={styles.loginText}>إنشاء حساب</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={this.goUignIn}
        >
          <Text style={{ color: "white" }}>لديك حساب ؟ تسجيل الدخول</Text>
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
