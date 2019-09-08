import React, { Component } from "react";
import { Text, View, FlatList, Platform } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  Title,
  Icon
} from "native-base";

import DetelesPost from "./DetelesPost";
// import { PostsData } from "../DummyData";
import axios from "axios";
import apiUrl from "./ApiConfig";
import ButtonAdd from "./ButtonAdd";


export class UserPost extends Component {
  state = {
    loading: true,
    posts: []
  };

  getUserPost = () =>{
    const id = this.props.screenProps.id
    const config = {
        headers: {'Authorization': `bearer ${this.props.screenProps.data}`}
        
      };
    //make axios requset
    axios
      .get(`${apiUrl}/users/${id}/posts`, config)
      .then(res => {
        this.setState({
          posts: res.data.posts,
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    this.getUserPost();
   
  }

  deletePost = (post_id) => {
    const config = {
      headers: {'Authorization': `bearer ${this.props.screenProps.data}`}
      
    };
    const self = this;
    // alert("delete Post")
    axios.delete(`${apiUrl}/posts/${post_id}`, config) 
    .then(res=> {
      if(res.status === 204){
        alert("تم حذف مشاركتك")
        // self.props.navigation.navigate("Personal");
          
        this.getUserPost()
      }else{
        alert("خطأ في الاتصال حاول مجددا") 
      }
    }).catch(err=>{
      console.log(err)
      alert(err)
    })
    // alert(post_id)
  }

  editPost = (post) => {
    // alert("Edit")
    this.props.navigation.navigate("EditPost", {post, getUserPost: this.getUserPost})
  }

  render() {
    // const { navigation } = this.props; 
    // const name = navigation.getParam("name");
    // console.log(this.props.screenProps.id)
    //5d727fbf18161600171176a5
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
                  {this.props.screenProps.id}
                </Text>
              </Body>
              
            </View>

            {!this.state.loading ? (
              <List>
                {this.state.posts.length == 0 ? (
                  <Text>No Posts</Text>
                ) : (
                  <FlatList
                    data={this.state.posts}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => (
                      <DetelesPost 
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
            ) : null}
          </Content>
        </Container>
      </>
    );
  }
}

export default UserPost;
