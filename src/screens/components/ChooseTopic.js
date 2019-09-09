import React, { Component } from "react";
import { StyleSheet, View, Picker } from "react-native";

export default class ChooseTopic extends Component {
  render() {
    const piccker = this.props.topics.map(cat => {
      return (
        <Picker.Item key={cat.id} label={`${cat.name}`} value={`${cat.id}`} />
      );
    });
    return (
      <View style={styles.container}>
        <Picker
          style={styles.pickerStyle}
          selectedValue={this.props.selected}
          onValueChange={id => this.props.topicID(id)}
        >
          {piccker}
        </Picker>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  pickerStyle: {
    height: 80,
    width: "80%", 
    color: "#5F2464",
    justifyContent: "center"
  }
});
