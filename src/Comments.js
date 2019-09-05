import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import { Container, Header, Content, Card, List, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import OneComment from './OneComment'

 class Comments extends Component {
    render() {
      const {Comments} = this.props;
        return (
            <Container>
            <Content>
             <List>

             <FlatList
             initialNumToRender={3}
                data={Comments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <OneComment
                    id={item.id}
                    createdAt={item.createdAt}
                    content={item.content}
                    likes={item.likes}
                    ownerName={item.owner.username}
                    ownerPhoto={item.owner.photo}
                    navigation={this.props.navigation}
                  />
                )}
                />
            </List>

             <Button><Text>End Comments</Text></Button>
             </Content>
           </Container>
           
        )
    }
}

export default Comments;
