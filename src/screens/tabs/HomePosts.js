import React from "react";
import { FlatList, StyleSheet, SafeAreaView, Platform, View } from "react-native";
import {  List} from "native-base";
import PostDetails from "../Posts/PostDetails";
import StartPage from "../Main/StartPage";
import SpinnerLoading from "../components/SpinnerLoading";
import { getPosts, getCatagories } from "../../ApiConfig"; 

export class HomePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: [],
      loading: true,
      postSearch: "",
      categoriesData: []
      
    };
  }

postSearchHandler = (postSearchWord)=> {
  this.setState({postSearch: postSearchWord})
}

  componentDidMount() {
    getCatagories().then(res => {
        // console.log(res)
        this.setState({
          categoriesData: res.data.categories,
          loading: false
        });
      }).catch(err => {
        console.log(err)
      })
    this.getposts()
  }
  getposts = ()=>{
    getPosts().then(res => {
      console.log(res.data.posts)
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
  postSearchHandler = (postSearchWord)=> {
    this.setState({postSearch: postSearchWord.toLowerCase()})
  }
  componentWillMount() {
    this.startHeaderHeight = 50
    if (Platform === 'android') {
        this.startHeaderHeight = 100 + StatusBar.currentHeight 
    }
}
filter = () => {
    this.props.navigation.navigate("Home")
}


  render() {
    let filterdPosts = this.state.allPosts.filter(
      post => {
        return post.content.indexOf(this.state.postSearch) !== -1
      }
    )
    return ( 
     
      <>
         {/* <View style={{flex: 1, marginTop: this.startHeaderHeight}}>  */}
      <StartPage postSearchHandler={this.postSearchHandler} filter={this.filter}/>
                    

        
            {this.state.loading ? (
              <View style={styles.flat}>
              <SpinnerLoading />
              </View>
            ) : (
            <List >
              <FlatList
                    data={filterdPosts} 
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
                        topics={this.state.categoriesData}
                        categoryId={item.category.id}
                        getposts={this.getposts}
                        navigation={this.props.navigation}
                      />
                    )}
                  />
        </List>
            )}
         
          {/* </View> */}
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
