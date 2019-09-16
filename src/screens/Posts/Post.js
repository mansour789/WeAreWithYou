import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import { Container, Content, List, Body, Right } from "native-base";

import PostDetails from "./PostDetails";
import { getAppPost, getPosts } from "../../ApiConfig";
import ButtonAdd from "../components/ButtonAdd";
import SpinnerLoading from "../components/SpinnerLoading"; 

export class Post extends Component {
  state = {
    loading: true,
    posts: [],
  };

  componentDidMount() {
    this.getAppPost();
    this.props.navigation.setParams({
      addPost: this.addPost
  });
  } 
  static navigationOptions = ({ navigation, screenProps}) => {
    const {params = {}} = navigation.state;
    return({
    title: navigation.state.params.name,
    headerRight: <ButtonAdd
    title={"حكاية"}
    colorW={"#C53364"}
    add={()=> params.addPost()}
    //   () => {
    //   const { data } = screenProps;
    //   const { topics, id,  } = navigation.state.params;
    //   if (data) {
    //     navigation.navigate("NewPost", {
    //       id,
    //       topics,
    //       addNewPost: this.addNewPost
    //     });
    //   } else {
    //     navigation.navigate("LoginView");
    //   }
    // }
  // }
  />
  })}
 
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
  
  getposts = ()=> {
  //  console.log("Iam on Post")
  //   this.setState(prevState => ({
  //     posts: [newPostObject, ...prevState.posts]
  //   }))
  const getPosts = this.props.navigation.getParam("getPosts");
  getPosts();
  }

  addPost = () => {
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    const topics = navigation.getParam("topics");
    if (this.props.screenProps.data) {
      this.props.navigation.navigate("NewPost", {
        id,
        posts: this.state.posts,
        addNewPost: this.addNewPost,
        topics,
        getPosts: this.getposts
      });
    } else {
      this.props.navigation.navigate("LoginView");
    }
  };
  render() {
    
    return (
      <>
        <Container>
          <Content>

            {!this.state.loading ? (
              <List>
                {this.state.posts.length == 0 ? (
                  <Text style={{fontSize: 18, textAlign: "center", marginVertical: 20}}>لا توجد قصص في هذا الموضوع </Text> 
                ) : (
                  <FlatList
                    data={this.state.posts}
                    keyExtractor={item => {
                      if (item.id){
                        return item.id
              
                      }else{
                        return item._id
                      }
                    }}
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
