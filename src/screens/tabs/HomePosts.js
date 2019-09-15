import React from "react";
import { FlatList, StyleSheet, SafeAreaView, Platform, View } from "react-native";
import {  List} from "native-base";
import PostDetails from "../Posts/PostDetails";
import StartPage from "../Main/StartPage";
import SpinnerLoading from "../components/SpinnerLoading";
import { getPosts } from "../../ApiConfig"; 

export class HomePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
      loading: true,
      postSearch: ""
    };
  }

postSearchHandler = (postSearchWord)=> {
  this.setState({postSearch: postSearchWord})
}

  componentDidMount() {
    getPosts().then(res => {
      // console.log(res)
      this.setState({
        allPosts: res.data.posts,
        loading: false
      });
    }).catch(err => {
      console.log(err)
      this.setState({
          loading: false
      })
    })
  }
  


  render() {
    // let filterdCatagories = this.state.categoriesData.filter(
    //   catagory => {
    //     return catagory.name.indexOf(this.state.postSearch) !== -1
    //   }
    // )
    return ( 
     
      <>
         <View style={{flex: 1}}>
                    <View style={{}}> 

        
            {this.state.loading ? (
              <View style={styles.flat}>
              <SpinnerLoading />
              </View>
            ) : (
            <List >
              <FlatList
                    data={this.state.allPosts}
                    keyExtractor={item => {
                      if (item.id){
                        return item.id
              
                      }else{
                        return item._id 
                      }
                    }}
                    renderItem={({ item }) => (
                      <PostDetails
                        id={item.id}
                        createdAt={item.createdAt}
                        content={item.content}
                        likes={item.likes}
                        ownerName={item.owner.username}
                        ownerPhoto={item.owner.photo}
                        category={item.category.name}
                        categoryId={item.category.id}
                        navigation={this.props.navigation}
                      />
                    )}
                  />
        </List>
            )}
          </View>
          </View>
       </>
      
    );
  }
}

export default HomePost;

const styles = StyleSheet.create({
  flat: {
    flex:1,
    justifyContent: "space-between",
    alignItems: "center"
  }
});
