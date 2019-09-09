import React from "react";
import { Text, View } from "react-native";
import { Button } from "native-base";

export class Catagories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  seePosts = () => {
    this.props.navigation.navigate("Post", {
      name: this.props.name,
      id: this.props.id,
      topics: this.props.topics
    });
  };

  render() {
    return (
      <>
        <View style={styles.img}>
          <Button transparent onPress={this.seePosts} style={{flex:1, justifyContent: "center", alignItems: "center"}}>
            <Text style={styles.title}> {this.props.name}</Text>
          </Button>
        </View>
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
    backgroundColor: "#5F2464",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    evaluation: 3
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25
  }
};
