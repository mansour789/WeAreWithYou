import React from "react";
import { FlatList, StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import {  List} from "native-base";
import Catagories from "../Main/Catagories";
import StartPage from "../Main/StartPage";
import SpinnerLoading from "../components/SpinnerLoading";
import { getCatagories } from "../../ApiConfig"; 

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoriesData: [],
      loading: true,
      postSearch: ""
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
  }

  render() {
    let filterdCatagories = this.state.categoriesData.filter(
      catagory => {
        return catagory.name.indexOf(this.state.postSearch) !== -1
      }
    )
    return ( 
     
      <>
        <StartPage postSearchHandler={this.postSearchHandler}/>

        
            {this.state.loading ? (
              <View style={styles.flat}>
              <SpinnerLoading />
              </View>
            ) : (
            <List style={{flex: 2, justifyContent: "space-between",
            alignItems: "center" }}>
              <FlatList
                numColumns={2}
                initialNumToRender={10}
                data={filterdCatagories}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <Catagories
                    id={item.id}
                    name={item.name}
                    navigation={this.props.navigation}
                    topics={this.state.categoriesData}
                  />
                )}
              />
        </List>
            )}
          
       </>
      
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  flat: {
    flex:1,
    justifyContent: "space-between",
    alignItems: "center"
  }
});
