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
import { Platform } from "@unimodules/core";


export default class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post : {}
    };
  }

  editPost = () => {
    const { navigation } = this.props;
    const getUserPost = navigation.getParam("getUserPost");
    const self =this;
    const config = {
              headers: {'Authorization': `bearer ${this.props.screenProps.data}`}
              
            };

            if(this.state.post.content){

                axios.patch(`${apiUrl}/posts/${this.state.post._id}`,{
                    post: {
                        content: this.state.post.content
                      }
                }, config) 
        .then(res=> {
          if(res.status === 204){
            alert("تم تعديل حكايتك")
            getUserPost()
            self.props.navigation.navigate("UserPost");
    
          }else{
            alert("خطأ في الاتصال حاول مجددا") 
          } 
        }).catch(err=>{
          console.log(err)
          alert(err)
        })

            }else{
                alert("لا يمكن إرسال محتوى فارغ");
            }
            
  }


  componentDidMount() {
    const { navigation } = this.props;
    const post = navigation.getParam("post");
    
    
    this.setState({ post });
    setTimeout(()=>{
        console.log("ffffffffffffff")
        console.log(this.state.post)
    },4)
    // Object {  
    //     "__v": 0,
    //     "_id": "5d73bb0d4b945400175efce9",
    //     "category": "5d714e6109f9870004a3bbe0",
    //     "content": "Ccvvcc",
    //     "createdAt": "2019-09-07T14:13:33.115Z",
    //     "likes": Array [],
    //     "owner": "5d727fbf18161600171176a5",
    //     "updatedAt": "2019-09-07T14:13:33.115Z",
    //   }
  }

  render() {
    
    return (
      
      
      <Container>
        <Content>
          <Header style={{ backgroundColor: "#5F2464" }}>
            <Text style={styles.header}>
            حرر حكايتك
            </Text>
          </Header>
          <Card>
            
            <CardItem transparent>
            {/* <KeyboardAvoidingView style={styles.container} behavior="padding" enabled> */}

            
              <Form>
                <Textarea
                autoCorrect={false}
                  onChangeText={postt => this.setState(prevState => ({
                      post: { ...prevState.post,
                        content: postt
                     }
                  }))}
                  rowSpan={4}
                  defaultValue={this.state.post.content}
                />
              </Form>
              {/* </KeyboardAvoidingView> */}
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
                onPress={this.editPost}
              >
                <Text
                  style={{
                    margin: 5,
                    color: "white",  
                    paddingLeft: 3,
                    paddingRight: 3
                  }}
                >
                  عدل
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
    alignItems: "center"
   
  },
  header: { 
    color: "white", 
    fontSize: 20, 
    fontWeight: "500" ,
    marginVertical: Platform.OS === "android" ? 17:0
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
