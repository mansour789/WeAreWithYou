import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Container, Content, List, Body, Right } from "native-base";

import PostDetails from "./PostDetails";
import { getAppPost } from "../../ApiConfig";
import ButtonAdd from "../components/ButtonAdd";
import SpinnerLoading from "../components/SpinnerLoading";

export class Post extends Component {
  state = {
    loading: true,
    posts: []
  };

  componentDidMount() {
    this.getAppPost();
  } 
  // componentDidUpdate() {
  //   const { navigation } = this.props;
  //   const newPost = navigation.getParam("newPost");
  //   // console.log(this.state.posts) 
  //   if (newPost){
  //     // this.getAppPost();
  //     // console.log("NEW POST IS")
  //     // console.log(newPost)
  //     // console.log("Old post")
  //     // console.log(this.state.posts[1])
  //     // this.setState(prevState => ({
  //     //   posts: [...prevState.posts, newPost]
  //     // }))
  //   }
  // }
  getAppPost = () => {
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    //make axios requset
    getAppPost(id)
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
  

  addPost = () => {
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    const topics = navigation.getParam("topics");
    if (this.props.screenProps.data) {
      this.props.navigation.navigate("NewPost", {
        id,
        posts: this.state.posts,
        topics
      });
    } else {
      this.props.navigation.navigate("LoginView");
    }
  };
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");
    return (
      <>
        <Container>
          <Content>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "#5F2464",
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
                    color: "white",
                    margin: 10
                  }}
                >
                  {name}
                </Text>
              </Body>
              <Right>
                <ButtonAdd
                  title={"حكاية"}
                  colorW={"white"}
                  add={this.addPost}
                />
              </Right>
            </View>

            {!this.state.loading ? (
              <List>
                {this.state.posts.length == 0 ? (
                  <Text>لا توجد قصص في هذا الموضوع </Text>
                ) : (
                  <FlatList
                    data={this.state.posts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <PostDetails
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
                )}
              </List>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <SpinnerLoading />
              </View>
            )}
          </Content>
        </Container>
      </>
    );
  }
}

export default Post;
