import React from 'react'
import {Image} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './screens/tabs/Home';
import Post from './screens/Posts/Post';
import LoginView from './screens/Auth/LoginView';
import SignUp from './screens/Auth/SignUp'
import {Icon} from 'native-base'
import Personal from './screens/tabs/Personal'
import OnePost from './screens/Posts/OnePost'
import NewPost from './screens/Posts/NewPost'
import NewComment from './screens/comments/NewComment';
import UserPost from './screens/Posts/UserPost'
import EditPost from './screens/Posts/EditPost'
import Aboutus from './screens/tabs/Aboutus';

const homeStack = createStackNavigator({
    Home: { 
      screen: Home, 
      navigationOptions:{
        title  : "العناوين الرئيسية",
       
      }
    },
    Post: {  
      screen: Post, 
      
    },
    Personal: {  
        screen: Personal, 
        
      },
      OnePost: {  
        screen: OnePost, 
        
      },
      NewPost: {  
          screen: NewPost, 
          navigationOptions:{
            title  : "حكاية جديدة",
          }
        },
        LoginView: {  
            screen: LoginView, 
            navigationOptions:{
              title  : "تسجيل الدخول",
            }
          },
          NewComment: {  
              screen: NewComment, 
              navigationOptions:{
                title  : "تعليق جديد",
              }
            },
            UserPost: {
              screen: UserPost,
              navigationOptions:{
                title: "مشاركاتك"
              }
            },
            SignUp: {
              screen: SignUp,
              navigationOptions:{
                title: "إنشاء حساب"
              }
            },
            EditPost: {
              screen: EditPost,
              navigationOptions:{
                title: "تعديل حكايتك"
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
    // SignUp: {
    //   screen: SignUp,
    //   navigationOptions: {
    //     tabBarIcon: ({ focused, horizontal, tintColor }) => (
    //       <Icon name="ios-options" size={30} style={{ color: 'gray'}} />
    //     )
    //   },
    // },   
    LoginView: {
      screen: LoginView,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <Icon name="ios-person" size={30} style={{ color: 'gray'}} />
          
        )
      },
    },
    Personal: {
      screen: Personal,
      navigationOptions: {
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
          <Image source={require('../assets/Default.png')} style={{width: 45, height: 30}} />
        )
        
      },
    } 
    
  },    
  { 
    initialRouteName : "Personal", 
    tabBarOptions: {
      activeTintColor: '#C53364',
      inactiveTintColor: 'gray',
      activeBackgroundColor: 'white'
    },
  }
  );

  export default Appp = createAppContainer(Apppw);