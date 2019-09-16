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
import { loginUser } from "../../ApiConfig";

const ACCESS_TOKEN = "access_token";
const USERNAME = "username";
const PHOTO = "photo";
const ID = "user_id";

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
    const screenProps = this.props.screenProps; 
    const { navigation } = this.props;
    loginUser(userName, password)
      .then(res => {
        if (res.response) {
          if (res.response.data.name == "BadCredentialsError") {
            alert("اسم المستخدم أو كلمة المرور غير صحيحة");
            return;
          }
        } 
        const userData = res.data.user;
        

        screenProps.setUser(
          userData.token,
          userData.username,
          userData.photo,
          userData._id
        );
        this.saveToken(
          userData.token,
          userData.username,
          userData.photo,
          userData._id
        );
        
        navigation.navigate("HomePost");
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };

  async saveToken(token, user, photo, id) {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN, token);
      await AsyncStorage.setItem(USERNAME, user);
      await AsyncStorage.setItem(PHOTO, photo);
      await AsyncStorage.setItem(ID, id);
    } catch (error) {
      console.log("somthing wrong" + error);
    }
  }

  goRegister = () => {
    this.props.navigation.navigate("SignUp");
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
