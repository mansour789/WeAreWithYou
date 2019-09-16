import React, { Component } from "react";
import { Text, Keyboard } from "react-native";

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
import { sendComment } from "../../ApiConfig";

export default class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  sendComment = () => { 
    Keyboard.dismiss();
    const { navigation } = this.props;
    const getAllComments = navigation.getParam("getAllComments");
    const id = navigation.getParam("id");
    const data = this.state.comment
    const token = this.props.screenProps.data

    if (this.state.comment) {
      sendComment(token, id, data)
        .then(res => {
          if (res.status === 201) {
            // console.log(res)
            
            
            getAllComments()
            alert("تم إرسال تعليقك بنجاح");
            this.props.navigation.navigate("OnePost", {newComment: res.data.comment});
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
