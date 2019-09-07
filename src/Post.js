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
// import Icon from "react-native-vector-icons/Ionicons";
import DetelesPost from "./DetelesPost";
// import { PostsData } from "../DummyData";
import axios from "axios";
import apiUrl from "./ApiConfig";
import ButtonAdd from "./ButtonAdd";


export class Post extends Component {
  state = {
    loading: true,
    posts: []
  };

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    //make axios requset
    axios
      .get(`${apiUrl}/categories/${id}/posts`)
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


  addPost = () => {
    if(this.props.screenProps.data){
      
      this.props.navigation.navigate("NewPost")
    }else{
      this.props.navigation.navigate("LoginView")
    }
  }
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
                  {name}
                </Text>
              </Body>
              <Right>
                <ButtonAdd title={"حكاية"} add={this.addPost} />
              </Right>
            </View>

            {!this.state.loading ? (
              <List>
                {this.state.posts.length == 0 ? (
                  <Text>No Posts</Text>
                ) : (
                  <FlatList
                    data={this.state.posts}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <DetelesPost
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
            ) : null}
          </Content>
        </Container>
      </>
    );
  }
}

export default Post;
