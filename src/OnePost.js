import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
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
import Comments from "./Comments";
import Moment from "moment";
import { CommentsData } from "../DummyData";
import ButtonAdd from "./ButtonAdd";
import axios from "axios";
import apiUrl from "./ApiConfig";
import SpinnerLoading from "./SpinnerLoading";

class OnePost extends Component {
  state = {
    showComment: false,
    comments: [],
    loading: true
  };
  componentDidMount() {
    //get comment  /posts/:post_id/comments
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    axios
      .get(`${apiUrl}/posts/${id}/comments`)
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
      
      this.props.navigation.navigate("NewComment", {id})
    }else{
      this.props.navigation.navigate("LoginView")
    }
  }
  render() {
    const { navigation } = this.props;
    const content = navigation.getParam("content");
    const ownerName = navigation.getParam("ownerName");
    const title = navigation.getParam("title");

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
                  source={require(`../assets/Default.png`)}
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
              {/* <Body> */}
              <Right>
                <Button
                  transparent
                  onPress={() => this.setState({ showComment: true })}
                >
                  <Text style={{ marginRight: 2 }}>
                    {this.state.comments ? this.state.comments.length : "0"}{" "}
                    تعليقات
                  </Text>
                  <Icon active name="chatbubbles" style={{}} />
                </Button>
                {/* </Body> */}
                {/* <Text></Text> */}
              </Right>
            </CardItem>
          </Card>
          {this.state.showComment ? (
            <>
              {this.state.loading ? (
                <SpinnerLoading />
              ) : (
                <Comments Comments={this.state.comments} />
              )}
            </>
          ) : null}
        </Content>
      </Container>
    );
  }
}

export default OnePost;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1
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
});
