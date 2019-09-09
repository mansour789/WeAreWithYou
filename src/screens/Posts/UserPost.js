import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Container, Content, List, Body } from "native-base";

import PostDetails from "./PostDetails";
import { deletePost, getUserPost } from "../../ApiConfig";
import SpinnerLoading from "../components/SpinnerLoading";

export class UserPost extends Component {
  state = {
    loading: true,
    posts: []
  };

  getUserPost = () => {
    const token = this.props.screenProps.data
    const id = this.props.screenProps.id;
    
    //make axios requset
    getUserPost(token, id)

    
      .then(res => {
        this.setState({
          posts: res.data.posts,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getUserPost();
  }

  deletePost = post_id => {
    const token = this.props.screenProps.data
    
    deletePost(token,post_id)
    
      .then(res => {
        if (res.status === 204) {
          alert("تم حذف مشاركتك");

          this.setState({ loading: false });
          this.getUserPost();
        } else {
          alert("خطأ في الاتصال حاول مجددا");
        }
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  };

  editPost = post => {
    this.props.navigation.navigate("EditPost", {
      post,
      getUserPost: this.getUserPost
    });
  };

  render() {
    return (
      <>
        <Container>
          <Content>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "white",
                borderBottomWidth: 1,
                borderBottomColor: "#dddddd"
              }}
            >
              <Body>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "600",
                    textAlign: "center",
                    flex: 1,
                    margin: 10
                  }}
                >
                  {this.props.screenProps.username}
                 
                </Text>
              </Body>
            </View>

            {!this.state.loading ? (
              <List>
                {this.state.posts.length == 0 ? (
                  <Text style={{fontSize: 18, textAlign: "center", marginVertical: 20}}>ليس لديك قصة حتى الآن</Text>
                ) : (
                  <FlatList
                    data={this.state.posts}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => (
                      <PostDetails
                        id={item._id}
                        createdAt={item.createdAt}
                        content={item.content}
                        likes={item.likes}
                        ownerName={this.props.screenProps.username}
                        ownerPhoto={this.props.screenProps.photo}
                        navigation={this.props.navigation}
                        deletePost={this.deletePost}
                        editPost={this.editPost}
                        wholePost={item}
                        isOwner={"YES"}
                      />
                    )}
                  />
                )}
              </List>
            ) : (
              <SpinnerLoading />
            )}
          </Content>
        </Container>
      </>
    );
  }
}

export default UserPost;
