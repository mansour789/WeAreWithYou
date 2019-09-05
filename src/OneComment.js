import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Moment from 'moment'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

 class OneComment extends Component {
    render() {
      const {id, createdAt, content, likes, ownerName, ownerPhoto} = this.props;
        return (
            <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggdND5xYxohjHJV_i8nO0EUplyrJHxDDxiHq6tboI184Oaezw'}} />
                    <Body>
                      <Text>{ownerName}</Text>
                     
                    </Body>
                  </Left>
                </CardItem>
                <CardItem  transparent>
                  <Text>{content}.</Text>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent onPress={()=> alert("Click Like")}>
                      <Icon active name="thumbs-up" />
                      <Text>{likes}</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Text>{Moment(createdAt).fromNow()}</Text>
                  </Right>
                </CardItem>
                </Card>
        )
    }
}

export default OneComment;
