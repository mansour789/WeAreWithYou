import React from "react";
import {
  FlatList, StyleSheet
} from "react-native";
import { Button, View } from "native-base";
import Catagories from '../../Catagories'
import StartPage from "../../StartPage";
import {categoriesData} from '../../../DummyData';
import {PostProvidor, PostContext} from '../../context';

export class Home extends React.Component {
  state ={
    f: "cc"
  }
  
  render() {
    return (
      <>
      <PostProvidor>
        <StartPage />
      <View style={styles.flat}>
        <FlatList
        numColumns={2} 
        data={categoriesData.categories}  
        keyExtractor={(item =>item.id)}
  renderItem={({item}) => <Catagories  id={item.id} name={item.name} navigation={this.props.navigation} />}
/>
{/* <Catagories navigation={this.props.navigation}/> */}

</View>
</PostProvidor>
    </>   
    
    
              
             
        
     
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  flat: {
    
    justifyContent: "space-between",
    alignItems: "center"
  }
})