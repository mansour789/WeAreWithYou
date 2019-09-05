import { createStackNavigator } from 'react-navigation-stack';
import {  createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Home from './screens/tabs/Home';
import Post from './Post';

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
    Home: homeStack,   
    MySittiong: AccountScreen
  },    
  { 
    initialRouteName : "Home", 
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      activeBackgroundColor: 'white'
    },
  }
  );

  export default Appp = createAppContainer(Apppw);