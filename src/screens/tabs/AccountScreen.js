// import React from "react";
// import { Text, View, AsyncStorage } from "react-native";
// import { Button } from "native-base";
// import SpinnerLoading from '../../SpinnerLoading'

// import { Container, Header, Content, ListItem,  Radio, Right, Left } from 'native-base';
// export class AccountScreen extends React.Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
       
//     }
//     // this.getToken = this.getToken.bind(this);
//   }
  
  
//   async saveToken() {
//     try {
//       await AsyncStorage.setItem("access_token", "");
//       alert("change")
//     } catch (error) {
//       console.log("somthing wrong" + error);
//     }
//   }
  

//   render() {
//     return (
//       // <View style={styles.viewStyle}>
//       //   <Button block style={styles.buttonStyle} onPress={() => this.saveToken()}>
//       //     <Text style={styles.buttonText}>ACOUNNNNT</Text>
//       //   </Button>
//       //   <SpinnerLoading/>
//       // </View>

      

//       <Container>
//         <Header />
//         <Content>
//           <ListItem selected={false} >
//             <Left>
//               <Text>Lunch Break</Text>
//             </Left>
//             <Right>
//               <Radio
//                 color={"#f0ad4e"}
//                 selectedColor={"#5cb85c"}
//                 selected={false}
//               />
//             </Right>
//           </ListItem>
//           <ListItem selected={true}>
//             <Left>
//               <Text>Discussion with Client</Text>
//             </Left>
//             <Right>
//               <Radio
//                 color={"#f0ad4e"}
//                 selectedColor={"#5cb85c"}
//                 selected={true}
//               />
//             </Right>
//           </ListItem>
//         </Content>
//       </Container>

//     );
//   }
// }

// export default AccountScreen;

// const styles = {
//   viewStyle: {
//     marginTop: 100,
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   title: {
//     fontSize: 30,
//     color: "blue",
//     alignItems: "center"
//   },
//   buttonStyle: {
//     margin: 10
//   },
//   buttonText: {
//     color: "white"
//   }
// };


import React, { Component } from 'react'  
import {StyleSheet,View, Text,Picker} from 'react-native'  
  
export default class ChooseTopic extends Component {  
      


    
  
    render() {  
      const piccker = this.props.topics.map(cat => {
        return (
          <Picker.Item key={cat.id} label={`${cat.name}`} value={`${cat.id}`} />
        );
      });
        return (  
            <View style={styles.container}>  
                <Text style={styles.textStyle}>اختر موضوع</Text>  
                <Picker style={styles.pickerStyle}  
                        selectedValue={this.props.selected}  
                        onValueChange={(id) =>  
                            this.props.topicID(id)}  
                    >  
                    
                    {piccker}
                </Picker>  
                {/* <Text style={styles.textStyle}> {"Id ="+this.state.id}</Text>   */}
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create ({  
     container: {  
         flex: 1,  
         alignItems: 'center',  
         justifyContent: 'center',  
     },  
    textStyle:{  
        margin: 24,  
        fontSize: 25,  
        fontWeight: 'bold',  
        textAlign: 'center',  
    },  
    pickerStyle:{  
        height: 150,  
        width: "80%",  
        color: '#344953',  
        justifyContent: 'center',  
    }  
})  
