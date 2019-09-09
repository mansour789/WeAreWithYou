import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import { signOut } from "../../ApiConfig";

export default class Personal extends Component {
  seeUserPost = () => {
    this.props.navigation.navigate("UserPost");
  };

  signOut = () => {
    const screenProps = this.props.screenProps;
    signOut(screenProps.data).then(res =>{

      if (res.status === 204) {
        screenProps.setUser("", "", "", "");
        this.rmoveToken();
        alert("تم تسجيل الخروج ");
      } else {
        alert("خطأ في الاتصال حاول مجددا");
      }
    }).catch(err => {
      console.log(err)
    })
  };

  async rmoveToken() {
    try {
      await AsyncStorage.removeItem("access_token");
      await AsyncStorage.removeItem("username");
      await AsyncStorage.removeItem("photo");
      await AsyncStorage.removeItem("user_id");
    } catch (error) {
      console.log("somthing wrong" + error);
    }
  }

  goUignIn = () => {
    this.props.navigation.navigate("LoginView");
  };
  signUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  render() {
    let buttons;
    if (this.props.screenProps.data) {
      buttons = (
        <>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => alert("click add email")}
          >
            <Text style={styles.loginText}>اربط حسابك مع الايميل</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.seeUserPost}
          >
            <Text style={styles.loginText}>شاهد مشاركاتك</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton, styles.delet]}
            onPress={this.signOut}
          >
            <Text style={styles.loginText}>تسجيل الخروج </Text>
          </TouchableHighlight>
        </>
      );
    } else {
      buttons = (
        <>
          <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={this.signUp}
          >
            <Text style={styles.loginText}>إنشاء حساب</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.buttonContainer}
            onPress={this.goUignIn}
          >
            <Text>لديك حساب ؟ تسجيل الدخول</Text>
          </TouchableHighlight>
        </>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={require("../../../assets/Default.png")}
            />

            <Text style={styles.name}>{this.props.screenProps.username} </Text>
          </View>
        </View>
        <View style={styles.container}>{buttons}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  header: {
    backgroundColor: "#5F2464",
    paddingBottom: 60
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
    marginTop: 50
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10
  },
  delet: {
    backgroundColor: "red"
  },
  name: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "600"
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
