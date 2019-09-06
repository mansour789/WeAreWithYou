import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './screens/tabs/Home';
import Post from './Post';
import LoginView from './screens/tabs/LoginView';
import NewPost from './NewPost'
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
          <Icon name="home" size={30} color="#900" />
        )
      },
    },   
    NewPost: {
      screen: NewPost,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name="ios-options" size={30} color="#900" />
        )
      },
    },   
    LoginView: {
      screen: LoginView,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name="ios-options" size={30} color="gray" />
        )
      },
    },   
    MySittiong: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name="ios-options" size={30} color="gray" />
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