import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
import { categoriesData } from "../DummyData";
import {
  Picker,
  Form,
  Textarea,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

export default class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      post: ''
    };
  }
  onValueChange = value => {
    this.setState({
      selected: value
    });
  };

  render() {
    const piccker = categoriesData.categories.map(cat => {
      return (
        <Picker.Item key={cat.id} label={`${cat.name}`} value={`${cat.id}`} />
      );
    });

    return (
      <Container>
        <Content>
            <Header style={{backgroundColor: "#5F2464"}}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '500'}}>حكاية جديدة</Text>
            </Header>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggdND5xYxohjHJV_i8nO0EUplyrJHxDDxiHq6tboI184Oaezw"
                  }}
                />
                <Body>
                  <Text
                    style={{ fontSize: 20, fontWeight: "500", marginBottom: 4 }}
                  >
                    User Here
                  </Text>
                </Body>
              </Left>
            </CardItem>
            {/* <CardItem><Text>{this.state.selected}</Text></CardItem> */}
            <CardItem transparent>
              <Form>
                <Picker
                  mode="dropdown"
                  placeholder="اختر مجموعة"
                  iosIcon={<Icon name="arrow-down" />}
                  headerStyle={{ backgroundColor: "#5F2464" }}
                  headerBackButtonTextStyle={{ color: "#fff" }}
                  headerTitleStyle={{ color: "#fff" }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange}
                >
                  {piccker}
                </Picker>
              </Form>
            </CardItem>
            <CardItem transparent>
              <Form>
                <Textarea onChangeText={post => this.setState({post})} rowSpan={8} placeholder="اكتب حكايتك هنا" />
              </Form>
            </CardItem>
            <CardItem style={{justifyContent: "center", alignItems: "center",}}>
             
              <Button  style={{backgroundColor: "#C53364", borderRadius:30, padding: 4, paddingLeft: 40, paddingRight: 40}} onPress={() => alert(this.state.post)}>
                  <Text style={{ margin: 5, color: 'white', paddingLeft: 3, paddingRight: 3, }}>انشر</Text>
                </Button>
            
              
            </CardItem>
          </Card>
        </Content>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5F2464"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#C53364"
  },
  loginText: {
    color: "white"
  }
});
