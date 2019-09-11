import React, { Component } from "react";
import { StyleSheet, Text, Platform , Keyboard} from "react-native";

import {
  Form,
  Textarea,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Button
} from "native-base";
import { editPost } from "../../ApiConfig";
// import { Platform } from "@unimodules/core";

export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  editPost = () => {
    Keyboard.dismiss();
    const { navigation } = this.props;
    const getUserPost = navigation.getParam("getUserPost");
    const self = this;
    const token = this.props.screenProps.data
    const postId = this.state.post._id
    const data = this.state.post.content
    if (this.state.post.content) {
      editPost(token, postId, data)
      
        .then(res => {
          if (res.status === 204) {
            alert("تم تعديل حكايتك");
            getUserPost();
            self.props.navigation.navigate("UserPost");
          } else {
            alert("خطأ في الاتصال حاول مجددا");
          }
        })
        .catch(err => {
          console.log(err);
          alert(err);
        });
    } else {
      alert("لا يمكن إرسال محتوى فارغ");
    }
  };

  componentDidMount() {
    const { navigation } = this.props;
    const post = navigation.getParam("post");

    this.setState({ post });
    setTimeout(() => {
      console.log("ffffffffffffff");
      console.log(this.state.post);
    }, 4);
  }

  render() {
    return (
      <Container>
        <Content>
          <Header style={{ backgroundColor: "#5F2464" }}>
            <Text style={styles.header}>حرر حكايتك</Text>
          </Header>
          <Card>
            <CardItem transparent>
              <Form>
                <Textarea
                  autoCorrect={false}
                  onChangeText={postt =>
                    this.setState(prevState => ({
                      post: { ...prevState.post, content: postt }
                    }))
                  }
                  rowSpan={4}
                  defaultValue={this.state.post.content}
                />
              </Form>
            </CardItem>
            <CardItem
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Button
                style={{
                  backgroundColor: "#C53364",
                  borderRadius: 30,
                  padding: 4,
                  paddingLeft: 40,
                  paddingRight: 40
                }}
                onPress={this.editPost}
              >
                <Text
                  style={{
                    margin: 5,
                    color: "white",
                    paddingLeft: 3,
                    paddingRight: 3
                  }}
                >
                  عدل
                </Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  
  header: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginVertical: Platform.OS === "android" ? 17 : 0
  }
});
