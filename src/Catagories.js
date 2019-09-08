import React from "react";
import { Text,  View } from "react-native";
import { Button,  } from "native-base";


export class Catagories extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  seePosts = ()=>{

  this.props.navigation.navigate("Post", {name: this.props.name, id: this.props.id, topics: this.props.topics})
  }
  
  render() {
    return (
      <>
        {/* <ImageBackground
          style={styles.img}
          borderRadius={10}
          source={require("../assets/Default.png")}
        > */}
        <View style={styles.img}>
          <Button
            transparent
            onPress={this.seePosts}
            
            style={styles.buttonImg}
          >
            <Text style={styles.title}> {this.props.name}</Text>
            {/* <Text>{this.props.id}</Text> */}
          </Button>
          </View>
        {/* </ImageBackground> */}
      </>
    );
  }
}

export default Catagories;

const styles = {
  img: {
    width: 120,
    height: 120,
    margin: 20,
    backgroundColor: '#5F2464'
    
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25
  },
  buttonImg: {
    flex: 1,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};
