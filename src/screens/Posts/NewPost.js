import React, { Component } from "react";
import { StyleSheet, Text, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
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
import ChooseTopic from "../components/ChooseTopic";
import { sendPost, getAppPost } from "../../ApiConfig";
// import { Platform } from "@unimodules/core";

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      post: "",
      topics: []
    };
  }
  topicID = value => {
    this.setState({
      selected: value
    });
  };
  /////////////

  sendPost = () => {
    Keyboard.dismiss();
    const token = this.props.screenProps.data
    const selected = this.state.selected
    const data = this.state.post
   
    const getPostsFromData = this.props.navigation.getParam("getPosts");
    

    if (this.state.post) {
      sendPost(token, selected, data)
      
        .then(res => {
          if (res.status === 201) {
            // console.log(res)
            alert("تم إرسال حكايتك بنجاح");
              // console.log(res.data)
              console.log("res.data.post")
              // console.log(res.data.post)
              getPostsFromData()
                

              
              
          } else {
            alert(res.status);
          }
        }).then(res => this.props.navigation.navigate("HomePost"))
        .catch(err => {
          // alert(err);
          console.log(err)
          console.log("err")
        });
    } else {
      alert("لا يمكن إرسال محتوى فارغ");
    }
  };

  //////////////

  // sendPost = () => {
  //   const token = this.props.screenProps.data;
  //   const selected = this.state.selected;
  //   const data = this.state.post;
  //   const { navigation } = this.props;
  //   const addNewPost = navigation.getParam("addNewPost");

  //   if (this.state.post) {
  //     sendPost(token, selected, data)
  //       .then(res => {
  //         if (res.status === 201) {
  //           console.log("res");
  //           addNewPost(res.data.post);
  //           alert("تم إرسال حكايتك بنجاح"); 
  //           // console.log(res.data)
  //           this.props.navigation.navigate("Post", { newPost: res.data.post });
  //         } else {
  //           alert(res.status);
  //         }
  //       })
  //       .catch(err => {
  //         console.log("object");
  //         alert(err);
  //       });
  //   } else {
  //     alert("لا يمكن إرسال محتوى فارغ");
  //   }
  // };
  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    const topics = navigation.getParam("topics");
    // const addNewPost = navigation.getParam("addNewPost");
    // console.log("addNewPost")
    // console.log(addNewPost)

    this.setState({ selected: id, topics });
  }

  render() {
    // console.log(this.props.screenProps.username)
    return (
      <Container>
        <Content>
          <Header style={{ backgroundColor: "#5F2464" }}>
            <Text style={styles.header}>اختر موضوع</Text>
          </Header>
        <KeyboardAvoidingView > 
          <Card>
            <CardItem transparent>
              <ChooseTopic
                topics={this.state.topics}
                topicID={this.topicID}
                selected={this.state.selected}
              />
            </CardItem>
            
            <CardItem transparent>
              <Form>
                <Textarea
                autoCapitalize={"none"}
                  onChangeText={post => this.setState({ post })}
                  rowSpan={4}
                  placeholder="اكتب حكايتك هنا"
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
                onPress={this.sendPost}
              >
                <Text
                  style={{
                    margin: 5,
                    color: "white",
                    paddingLeft: 3,
                    paddingRight: 3
                  }}
                >
                  انشر
                </Text>
              </Button>
            </CardItem>
          </Card>
            </KeyboardAvoidingView>
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
