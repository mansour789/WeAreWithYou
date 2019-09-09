import React, { Component } from "react";
import { Text } from "react-native";
import {
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  View
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class ListPost extends Component {
  seeUserPosts = () => {
    const { content, ownerName, id, createdAt, likes, ownerPhoto } = this.props;
    this.props.navigation.navigate("OnePost", {
      content,
      ownerName,
      id,
      createdAt,
      likes,
      ownerPhoto,
      
    });
  };
  render() {
    // console.log(this.props.ownerPhoto)
    const photo = this.props.ownerPhoto;
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={require(`../../../assets/Default.png`)} />
        </Left>
        {/* <TouchableOpacity onPress={this.seeUserPosts} style={{flex: 1}}> */}
        <Body style={{ marginHorizontal: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 4 }}>
            {this.props.ownerName}
          </Text>
          <Text note numberOfLines={3}>
            {this.props.content}{" "}
          </Text>
        </Body>
          {/* </TouchableOpacity> */}
        <Right>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
            >
            <Button
              bordered
              primary
              onPress={this.seeUserPosts}
              style={{ marginHorizontal: 6 }}
              >
              <Text
                style={{ color: "#0960FF", paddingLeft: 5, paddingRight: 5 }}
                >
                شاهد
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
        </Right>
      </ListItem>
    );
  }
}
