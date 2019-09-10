import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import Comments from "../comments/Comments";
import Moment from "moment";
import ButtonAdd from "../components/ButtonAdd";
import { getAllComments, onPressLike } from "../../ApiConfig"; 
import SpinnerLoading from "../components/SpinnerLoading";

class OnePost extends Component {
  state = {
    showComment: true,
    comments: [],
    loading: true,
    liked: false,
    likes: []
  };
  componentDidMount() {
    const likes = this.props.navigation.getParam('likes');
this.setState({likes})

    //get comment  /posts/:post_id/comments
    this.getAllComments();

    //If user like make liked true
    const userId = this.props.screenProps.id;

    if(likes.includes(userId)){
      this.setState({liked: true});
    }
  }
  addNewComment = (newCommentObject)=> {
   
    this.setState(prevState => ({
      comments: [newCommentObject, ...prevState.comments]
    }))
  }
  getAllComments = () => {
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    getAllComments(id)
      .then(res => {
        this.setState({
          comments: res.data.comments,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });

      
  }
  addComment = () => {
    const { navigation } = this.props;
    const id = navigation.getParam("id")
    if(this.props.screenProps.data){
      
      this.props.navigation.navigate("NewComment", {id, addNewComment: this.addNewComment})
    }else{
      this.props.navigation.navigate("LoginView")
    }
  }

  onPressLike = ()=>{
    const { navigation } = this.props;
    const userId = this.props.screenProps.id
    // const likes = navigation.getParam("likes");
     const token = this.props.screenProps.data
     const postId = navigation.getParam("id");

     const { liked, likes } = this.state;
     const currLikes = [...likes];
     console.log("currLikes ")
     console.log(currLikes)
     const indexOfUser = currLikes.indexOf(userId);
     liked ? currLikes.splice(indexOfUser,1): currLikes.push(userId)
     
   console.log("newLides")  
     console.log()
    
     this.setState({liked: !liked, likes: currLikes})
    onPressLike(token , postId).then(res=>{
      // console.log(res) 
      
    }).catch(err => {
      console.log(err)
    })

  }
  render() {
    const { navigation } = this.props;
    const { liked, likes } = this.state;
    
    const content = navigation.getParam("content");
    const ownerName = navigation.getParam("ownerName");
    const userId = this.props.screenProps.id
   
     const token = this.props.screenProps.data
     

    const createdAt = navigation.getParam("createdAt");
    const ownerPhoto = navigation.getParam("ownerPhoto");
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require(`../../../assets/Default.png`)}
                />
                <Body>
                  <Text
                    style={{ fontSize: 20, fontWeight: "500", marginBottom: 4 }}
                  >
                    {ownerName}
                  </Text>
                  <Text note>{Moment(createdAt).fromNow()}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem transparent>
              <Text>{content}</Text>
            </CardItem>
            <CardItem>
              <Left>
                <ButtonAdd title={"تعليق"} add={this.addComment}/>
              </Left>
            <Body>
            <Button transparent style={{justifyContent: "center"}} onPress={this.onPressLike}>
                  <Text style={{marginHorizontal: 7}}> {likes.length}</Text>
                  <Icon style={{color: !liked ? 'grey': '#C53364'}} name="thumbs-up" />
                </Button>
            </Body>
              <Right>
                <Button
                  transparent
                   
                >
                  <Text style={{ marginRight: 2 }}>
                    {this.state.comments ? this.state.comments.length : "0"}{" "}
                    تعليقات
                  </Text>
                  <Icon active name="chatbubbles"  />
                </Button>
               
              </Right>
            </CardItem>
          </Card>
          
              {this.state.loading ? (
                <SpinnerLoading />
              ) : (
                <Comments Comments={this.state.comments} userId={userId} token={token}/>
              )}
           
        </Content>
      </Container>
    );
  }
}

export default OnePost;
