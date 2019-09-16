import React, { Component } from "react";
import { Text } from "react-native";
import Moment from "moment";
import {
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import { onLikeComment } from '../../ApiConfig'

class OneComment extends Component {

  state = {
    liked: false,
    likes: []
  }
  componentDidMount() {
    const likes = this.props.likes;
this.setState({likes})

    

    //If user like make liked true
    const userId = this.props.userId;
    

    if(likes.includes(userId)){
      this.setState({liked: true});
    }
  }

  onLikeComment = () => {
//(token , commentId)
    // const { navigation } = this.props;
    // const likes = navigation.getParam("likes");
    //  const postId = navigation.getParam("id");
    // const userId = this.props.screenProps.id
    
    const { token, id, userId} = this.props;
     const { liked, likes } = this.state;
     const currLikes = [...likes];
     console.log("currLikes ")
     console.log(currLikes)
     const getAllComments = this.props.getAllComments
     const indexOfUser = currLikes.indexOf(userId);
     liked ? currLikes.splice(indexOfUser,1): currLikes.push(userId)
     
   console.log("newLides")  
     console.log(likes)
    
     this.setState({liked: !liked, likes: currLikes}) 
     onLikeComment(token , id).then(res=>{
      // console.log(res) 
      getAllComments()
    }).catch(err => {
      console.log(err)
    })
  }




  
  render() {
    const { id, createdAt, content, likes, ownerName, ownerPhoto } = this.props;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../../../assets/Default.png")} />
            <Body>
              <Text>{ownerName}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem transparent>
          <Text>{content}</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent onPress={this.onLikeComment}>
              <Icon style={{color: !this.state.liked ? 'grey': '#C53364'}} name="thumbs-up" />
              <Text style={{ margin: 5 }}>{this.state.likes.length}</Text>
            </Button>
          </Left>
          <Right>
            <Text>{Moment(createdAt).fromNow()}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default OneComment;
