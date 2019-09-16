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
import HomePost from './screens/tabs/HomePosts';

const homeStack = createStackNavigator({
  HomePost: { 
      screen: HomePost, 
      navigationOptions:{
        title  : "الصفحة الرئيسية",
        headerStyle: {
          backgroundColor: '#C53364',
        }
      }
    },
    Post: {  
      screen: Post, 
      
    },
    Home : {  
      screen: Home, 
      navigationOptions:{
        title  : " الرئيسية",
        headerStyle: {
          backgroundColor: '#C53364',
        }
      }
      
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
            headerStyle: {
              backgroundColor: '#C53364',
            }
          }
        },
        LoginView: {  
            screen: LoginView, 
            navigationOptions:{
              title  : "تسجيل الدخول",
              headerStyle: {
                backgroundColor: '#C53364',
              }
            }
          },
          NewComment: {  
              screen: NewComment, 
              navigationOptions:{
                title  : "تعليق جديد",
                headerStyle: {
                  backgroundColor: '#C53364',
                }
              }
            },
            UserPost: {
              screen: UserPost,
              navigationOptions:{
                title: "مشاركاتك",
                headerStyle: {
                  backgroundColor: '#C53364',
                }
              }
            },
            SignUp: {
              screen: SignUp,
              navigationOptions:{
                title: "إنشاء حساب",
                headerStyle: {
                  backgroundColor: '#C53364',
                }
              }
            },
            EditPost: {
              screen: EditPost,
              navigationOptions:{
                title: "تعديل حكايتك",
                headerStyle: {
                  backgroundColor: '#C53364',
                }
              }
            }
  })
  
  
  
const  Apppw = createBottomTabNavigator({
    Home: {
      screen: homeStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon name="ios-home" size={30} style={{ color: focused ? '#C53364': 'grey'}} />
        )
      },
    },   
    // HomePost: {
    //   screen: HomePost,
    //   navigationOptions: {
    //     tabBarIcon: ({ focused }) => (
    //       <Icon name="ios-home" size={30} style={{ color: focused ? '#C53364': 'grey'}} />
    //     )
    //   },
   // },   
    Personal: {
      screen: Personal,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Icon name="ios-person" size={30} style={{ color: focused ? '#C53364': 'grey'}} />
          
        )
      },
    },
    Aboutus: {
      screen: Aboutus, 
      navigationOptions: {
        showLabel: false,
        tabBarIcon: ({ focused }) => (
          <Image source={require('../assets/Default.png')} style={{width: 45, height: 30, tintColor: focused? null: 'grey'}} />
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