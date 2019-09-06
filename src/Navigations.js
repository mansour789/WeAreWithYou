import React from 'react'
import {Image} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './screens/tabs/Home';
import Post from './Post';
import LoginView from './screens/tabs/LoginView';
import Personal from './Personal'
import {Icon} from 'native-base'
import AccountScreen from './screens/tabs/AccountScreen'
import OnePost from './OnePost'


const homeStack = createStackNavigator({
    Home: { 
      screen: Home, 
      navigationOptions:{
        title  : "Home",
       
      }
    },
    Post: {  
      screen: Post, 
      navigationOptions:{
        title  : "Posts",
      }
    },
    AccountScreen: {  
        screen: AccountScreen, 
        navigationOptions:{
          title  : "AccountScreen",
        }
      },
      OnePost: {  
        screen: OnePost, 
        navigationOptions:{
          title  : "OnePost",
        }
      }
  })
  
  
  
const  Apppw = createBottomTabNavigator({
    Home: {
      screen: homeStack,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name="ios-home" size={30} style={{ color: 'gray'}} />
        )
      },
    },   
    // AccountScreen: {
    //   screen: AccountScreen,
    //   navigationOptions: {
    //     tabBarIcon: ({ focused, horizontal, tintColor }) => (
    //       <Icon name="ios-options" size={30} style={{ color: 'gray'}} />
    //     )
    //   },
    // },   
    Personal: {
      screen: Personal,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name="ios-person" size={30} style={{ color: 'gray'}} />
          
        )
      },
    },
    About: {
      screen: LoginView,
      navigationOptions: {
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('../assets/logo.png')} style={{width: 45, height: 30}} />
        )
        
      },
    } 
    
  },    
  { 
    initialRouteName : "Home", 
    tabBarOptions: {
      activeTintColor: '#C53364',
      inactiveTintColor: 'gray',
      activeBackgroundColor: 'white'
    },
  }
  );

  export default Appp = createAppContainer(Apppw);