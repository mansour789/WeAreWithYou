import React, { Component } from "react";
import { FlatList, Text, SafeAreaView, ScrollView } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  List,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View
} from "native-base";
import OneComment from "./OneComment";

class Comments extends Component {
  render() {
    const { Comments } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        
            <ScrollView scrollEventThrottle={16}>
              <View style={{flex: 1}}>
                <List>
                  <FlatList
                    initialNumToRender={3}
                    data={Comments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                      <OneComment
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
              </View>
            </ScrollView>
         
      </SafeAreaView>
    );
  }
}

export default Comments;
