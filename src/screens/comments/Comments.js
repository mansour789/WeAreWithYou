import React, { Component } from "react";
import { FlatList, SafeAreaView, ScrollView } from "react-native";
import { List, View } from "native-base";
import OneComment from "./OneComment";

class Comments extends Component {
  render() {
    const { Comments } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView scrollEventThrottle={16}>
          <View style={{ flex: 1 }}>
            <List>
              <FlatList
                initialNumToRender={3}
                data={Comments}
                keyExtractor={item => {
                  if (item.id){
                    return item.id
          
                  }else{
                    return item._id
                  }
                }}
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
