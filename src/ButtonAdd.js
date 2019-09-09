import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Icon } from "native-base";

export class ButtonAdd extends Component {
  render() {
    return (
      <Button
        iconRight
        bordered
        light
        style={{ marginRight: 10, paddingLeft: 10 }}
        onPress={this.props.add}
      >
        <Text style={{ marginRight: 5, color: this.props.colorW }}>
          اضف {this.props.title}
        </Text>
        <Icon name="add" color={this.props.colorW} />
      </Button>
    );
  }
}

export default ButtonAdd;
