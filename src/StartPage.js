import React from "react";
import { Text, View, Image, Platform } from "react-native";
import { Button, Item, Header, Icon, Input } from "native-base";

export class StartPage extends React.Component {

    state ={ 
        postSearch: ""
    }


  searchPosts = () => {};
  renderBody = () => {
     
  }
  render() {
    return (
      
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" onPress={this.searchPosts}></Icon>
          <Input  
            value={this.state.postSearch}
            placeholder="ابحث عن موضوع"
            onChangeText={postSearch => this.setState({postSearch})}
            />
            </Item>
        </Header>
        
      
    );
  }
}

export default StartPage;

