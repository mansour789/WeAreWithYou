import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import {
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  View
} from "native-base";
import {} from "react-native-gesture-handler";
export default class ListPost extends Component {
  // static navigationOptions = ({ navigation }) => {
  //   // const params = navigation.state.params || {};

  //   return {

  //     headerLeft: (
  //       <Button
  //         onPress={() => navigation.navigate('Personal')}
  //       />
  //     )
  //   };
  // };

  seePosts = (category, categoryId) => {
    this.props.navigation.navigate("Post", {
      name: category,
      id: categoryId,
      topics: this.props.topics,
      getPosts: this.props.getposts
    });
  };

  seeUserPosts = () => {
    const { content, ownerName, id, createdAt, likes, ownerPhoto, getposts } = this.props;
    this.props.navigation.navigate("OnePost", {
      content, 
      ownerName,
      id,
      createdAt,
      likes,
      ownerPhoto,
      getPosts: getposts
    });
  };
  render() {
    // console.log(this.props.ownerPhoto)
    const photo = this.props.ownerPhoto;
    return (
      <View style={{ width: "100%" }}>
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={require(`../../../assets/Default.png`)} />
          </Left>
          <Body onPress={this.seeUserPosts} style={{ marginHorizontal: 10 }}>
            <TouchableOpacity onPress={this.seeUserPosts}>
              <Text
                style={{ fontSize: 20, fontWeight: "500", marginBottom: 4 }}
              >
                {this.props.ownerName}
              </Text>
              <Text note numberOfLines={3}>
                {this.props.content}{" "}
              </Text>
            </TouchableOpacity>
          </Body>
          <Right>
            {this.props.category ? (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center"
                }}
              >
                <Button
                transparent Primary 
                  
                  onPress={() =>
                    this.seePosts(this.props.category, this.props.categoryId)
                  }
                  style={{ marginHorizontal: 6 }}
                >
                  <Text
                    style={{
                      paddingLeft: 5,
                      paddingRight: 5,
                      marginHorizontal: 3
                    }}
                  >
                    {this.props.category}
                  </Text>
                </Button>

                {this.props.isOwner === "YES" ? (
                  <>
                    <Button
                      bordered
                      danger
                      onPress={() => this.props.deletePost(this.props.id)}
                      style={{ marginHorizontal: 6 }}
                    >
                      <Text
                        style={{
                          paddingLeft: 5,
                          paddingRight: 5,
                          marginHorizontal: 3
                        }}
                      >
                        حذف{" "}
                      </Text>
                    </Button>
                    <Button
                      bordered
                      danger
                      onPress={() => this.props.editPost(this.props.wholePost)}
                      style={{ marginHorizontal: 6 }}
                    >
                      <Text
                        style={{
                          paddingLeft: 5,
                          paddingRight: 5,
                          marginHorizontal: 3 
                        }}
                      >
                        تعديل{" "}
                      </Text>
                    </Button>
                  </>
                ) : null}
              </View>
            ) : null}
          </Right>
        </ListItem>
      </View>
    );
  }
}
