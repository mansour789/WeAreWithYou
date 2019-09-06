import React from "react";
import {
  FlatList, StyleSheet, SafeAreaView, ScrollView, Text
} from "react-native";
import { Button, View } from "native-base";
import Catagories from '../../Catagories'
import StartPage from "../../StartPage";
import {categoriesData} from '../../../DummyData';
import {PostProvidor, PostContext} from '../../context';

export class Home extends React.Component {
  
  
  render() {
    return (
     
      <SafeAreaView style={{ flex: 1 }}>
        <StartPage />
        <ScrollView
              scrollEventThrottle={16}
                    >
                <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                    <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20, textAlign: 'center' }}>
                          حنا معك
                    </Text>
                </View>
          
    
     <View style={styles.flat}> 
        <FlatList
        numColumns={2} 
        data={categoriesData.categories}  
        keyExtractor={(item =>item.id)}
  renderItem={({item}) => <Catagories  id={item.id} name={item.name} navigation={this.props.navigation} />}
/> 


 </View>
 </ScrollView>
    </SafeAreaView>
    
              
             
        
     
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