import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import Comments from './Comments'
import Moment from 'moment'
import { CommentsData } from '../DummyData'


 class OnePost extends Component {
     state ={
        showComment: false,
        commentLength: 0
     }
     componentDidMount(){
       //get comment
       let allComments = CommentsData.comments;
       this.setState({commentLength: allComments.length})
     }
    render() {
      const { navigation } = this.props;
    const content = navigation.getParam("content");
    const ownerName = navigation.getParam("ownerName");
    const id = navigation.getParam("id");
    const createdAt = navigation.getParam("createdAt");
    const likes = navigation.getParam("likes");
    const ownerPhoto = navigation.getParam("ownerPhoto");

        return (
            <Container>
        <Content>
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
              <Text>{content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum sint ratione, commodi eaque hic, itaque reprehenderit non assumenda exercitationem suscipit corporis consectetur fuga, sunt a. Quam explicabo repudiandae temporibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa aperiam ipsum adipisci illum ipsam unde aspernatur placeat velit voluptas dolorem repudiandae, porro quidem? Esse ipsum animi impedit blanditiis sit et?</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button  transparent onPress={()=> alert("Click Like")}>
                  <Text>{likes}</Text>
                  <Icon active name="thumbs-up" />
                </Button>
              </Left>
              <Body>
                <Button  transparent onPress={()=> this.setState({showComment: true})}>
                    
                  <Text>{this.state.commentLength ? this.state.commentLength : "0"} comments</Text>
                  <Icon active  name="chatbubbles" />
                </Button>
              </Body>
              <Right>
                <Text>{Moment(createdAt).fromNow()}</Text>
              </Right>
            </CardItem>
          </Card>
          {this.state.showComment ? <Comments 
            Comments={CommentsData.comments}
          /> : null}
        </Content>
      </Container>
        )
    }
}

export default OnePost

const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center"
    },
    title: {
        fontSize: 40
    },
    pragh: {
        fontSize: 20
    }
})