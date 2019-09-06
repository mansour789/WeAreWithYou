import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import {Icon} from 'native-base'

export default class Personal extends Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>John Doe </Text>
                
            </View>
          </View>
        <View style={styles.container}>
          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => alert('click add email')}>
          <Text style={styles.loginText}>اربط حسابك مع الايميل</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => alert('see post')}>
          <Text style={styles.loginText}>شاهد مشاركاتك</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton, styles.delet]} onPress={() => alert('delete accont')}>
          <Text style={styles.loginText}>احذف حسابك</Text>
        </TouchableHighlight>
        </View>

          
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
      },
  header:{
    backgroundColor: "#5F2464",
    paddingBottom: 60
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
    marginTop: 50
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  delet: {
      backgroundColor: 'red'
  },
  name:{
    fontSize:22,
    color:"#FFF",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  buttonContainer: {
    
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#C53364",
  },
  loginText: {
    color: 'white',
  }
});