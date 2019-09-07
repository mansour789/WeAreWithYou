import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";
// import { categoriesData } from "../DummyData";
import {
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
import ChooseTopic from "./ChooseTopic";
import axios from "axios";
import apiUrl from './ApiConfig'


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
      headers: {'Authorization': `bearer ${this.props.screenProps.data}`}
      
    };
    
    if (this.state.post) {
      axios.post(`${apiUrl}/categories/${this.state.selected}/posts`,{
          post: {
            content: this.state.post
          }
      },config).then(res => { 
        if (res.status == 201){ 
          
          console.log(res)
          alert("تم إرسال حكايتك بنجاح")
          this.props.navigation.goBack();

        }else{
          alert(res.status)

        }
      }).catch(err=>{
        alert(err)
      })
  
    } else {
      alert("لا يمكن إرسال محتوى فارغ");
    }
  };
  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    const topics = navigation.getParam("topics")
    this.setState({ selected: id, topics });
  }

  render() {
    console.log(this.props.screenProps.username)
    return (
      
      
      <Container>
        <Content>
          <Header style={{ backgroundColor: "#5F2464" }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
              حكاية جديدة
            </Text>
          </Header>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require(`../assets/Default.png`)}
                />
                <Body>
                  <Text
                    style={{ fontSize: 20, fontWeight: "500", marginBottom: 4 }}
                  >
                    {this.props.screenProps.username}
                  </Text>
                </Body>
              </Left>
            </CardItem>
            {/* <CardItem><Text>{this.state.selected}</Text></CardItem> */}
            <CardItem transparent>
              <ChooseTopic
                topics={this.state.topics}
                topicID={this.topicID}
                selected={this.state.selected}
                
              />
              {/* <Text>{this.state.topics[0]}</Text> */}
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
