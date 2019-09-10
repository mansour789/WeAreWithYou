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
import { getAllComments } from "../../ApiConfig"; 
import SpinnerLoading from "../components/SpinnerLoading";

class OnePost extends Component {
  state = {
    showComment: true,
    comments: [],
    loading: true
  };
  componentDidMount() {

    //get comment  /posts/:post_id/comments
    this.getAllComments();
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
  render() {
    const { navigation } = this.props;
    const content = navigation.getParam("content");
    const ownerName = navigation.getParam("ownerName");
  

    const createdAt = navigation.getParam("createdAt");
    const likes = navigation.getParam("likes");
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
              <Text>Like</Text>
            </Body>
              <Right>
                {/* <Button
                  transparent
                  onPress={() => this.setState({ showComment: true })} 
                > */}
                  <Text style={{ marginRight: 2 }}>
                    {this.state.comments ? this.state.comments.length : "0"}{" "}
                    تعليقات
                  </Text>
                  <Icon active name="chatbubbles" style={{}} />
                {/* </Button> */}
               
              </Right>
            </CardItem>
          </Card>
          
              {this.state.loading ? (
                <SpinnerLoading />
              ) : (
                <Comments Comments={this.state.comments} />
              )}
           
        </Content>
      </Container>
    );
  }
}

export default OnePost;
