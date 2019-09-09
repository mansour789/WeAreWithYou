import React, { Component } from "react";
import { Text } from "react-native";
import Moment from "moment";
import {
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

class OneComment extends Component {
  render() {
    const { id, createdAt, content, likes, ownerName, ownerPhoto } = this.props;
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../../../assets/Default.png")} />
            <Body>
              <Text>{ownerName}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem transparent>
          <Text>{content}.</Text>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent onPress={() => alert("Click Like")}>
              <Icon active name="thumbs-up" />
              <Text style={{ margin: 5 }}>{likes}</Text>
            </Button>
          </Left>
          <Right>
            <Text>{Moment(createdAt).fromNow()}</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default OneComment;
