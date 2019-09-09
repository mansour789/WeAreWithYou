import React, { Component } from "react";
import { StyleSheet, Text, KeyboardAvoidingView, Platform } from "react-native";
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
import axios from "axios"; 
import apiUrl from "../../ApiConfig";
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

  sendPost = () => {
    const config = {
      headers: { Authorization: `bearer ${this.props.screenProps.data}` }
    };

    if (this.state.post) {
      axios
        .post(
          `${apiUrl}/categories/${this.state.selected}/posts`,
          {
            post: {
              content: this.state.post
            }
          },
          config
        )
        .then(res => {
          if (res.status == 201) {
            // console.log(res)
            alert("تم إرسال حكايتك بنجاح");

            this.props.navigation.goBack();
          } else {
            alert(res.status);
          }
        })
        .catch(err => {
          alert(err);
        });
    } else {
      alert("لا يمكن إرسال محتوى فارغ");
    }
  };
  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    const topics = navigation.getParam("topics");
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
