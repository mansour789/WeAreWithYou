import React from "react";
import { Text, ImageBackground } from "react-native";
import { Button } from "native-base";


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
        <ImageBackground
          style={styles.img}
          borderRadius={10}
          source={require("../assets/dd.jpeg")}
        >
          <Button
            bordered
            onPress={this.seePosts}
            info
            style={styles.buttonImg}
          >
            <Text style={styles.title}> {this.props.name}</Text>
            <Text>{this.props.id}</Text>
          </Button>
        </ImageBackground>
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

    opacity: 0.7
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  buttonImg: {
    flex: 1,

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};
