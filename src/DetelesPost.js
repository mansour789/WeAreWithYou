import React, { Component } from 'react';
import { Text, ImageBackground } from "react-native";
import { Container, Header, Content, List, ListItem, Thumbnail,  Left, Body, Right, Button, Title } from 'native-base';
export default class ListPost extends Component {

  seePost = () => {
    
    const {content, ownerName, id, createdAt, likes, ownerPhoto} = this.props;
    this.props.navigation.navigate("OnePost",{
      content, ownerName, id, createdAt, likes, ownerPhoto
    });
  }
  render() {
    return (
      
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggdND5xYxohjHJV_i8nO0EUplyrJHxDDxiHq6tboI184Oaezw' }} />
              </Left>
              <Body>
                <Text>{this.props.ownerName}</Text>
                <Text note numberOfLines={3}>{this.props.content}   er encedif ference differen cedifferen cedifferencedifference . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={()=>this.seePost()}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          
    );
  }
}