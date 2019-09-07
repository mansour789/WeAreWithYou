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
    console.log(this.props.ownerPhoto)
    const photo = this.props.ownerPhoto
    return (
      
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={require(`../assets/Default.png`)} />
              </Left>
              <Body>
                <Text style={{fontSize: 20, fontWeight: "500", marginBottom: 4}}>{this.props.ownerName}</Text>
                <Text note numberOfLines={3}>{this.props.content}  </Text>
              </Body>
              <Right>
                <Button  bordered primary onPress={()=>this.seePost()}>
                  <Text style={{color: "#0960FF", paddingLeft:5, paddingRight: 5, margin: 3}}>شاهد</Text>
                </Button>
              </Right>
            </ListItem>
          
    );
  }
}