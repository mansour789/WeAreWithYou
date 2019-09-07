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
import { PostsData } from "../DummyData";
import ButtonAdd from './ButtonAdd'

export class Post extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    //make axios requset
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
              <ButtonAdd title={"حكاية"} />
          
          </Right>  
         
            
             
              
            </View>

            <List>
              <FlatList
                data={PostsData.posts}
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
            </List>
          </Content>
        </Container>
      </>
    );
  }
}

export default Post;
