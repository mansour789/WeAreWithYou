import React, { Component } from "react";
import { Text } from "react-native";

import {
  Form,
  Textarea,
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Left,
  Body
} from "native-base";
import axios from "axios";
import apiUrl from "../../ApiConfig";

export default class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  sendComment = () => {
    const { navigation } = this.props;
    const id = navigation.getParam("id");

    const config = {
      headers: { Authorization: `bearer ${this.props.screenProps.data}` }
    };

    if (this.state.comment) {
      axios
        .post(
          `${apiUrl}/posts/${id}/comments`,
          {
            comment: {
              content: this.state.comment
            }
          },
          config
        )
        .then(res => {
          if (res.status === 201) {
            // console.log(res)
            alert("تم إرسال تعليقك بنجاح");
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

  render() {
    // const photo = this.props.screenProps.photo;
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require(`../../../assets/Default.png`)} />
                <Body>
                  <Text
                    style={{ fontSize: 20, fontWeight: "500", marginBottom: 4 }}
                  >
                    {this.props.screenProps.username}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem transparent></CardItem>
            <CardItem transparent>
              <Form>
                <Textarea
                  onChangeText={comment => this.setState({ comment })}
                  rowSpan={2}
                  placeholder="اكتب تعليقك هنا"
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
                onPress={this.sendComment}
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