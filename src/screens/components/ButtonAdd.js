import React, { Component } from "react";
import { Text } from "react-native";
import { Button, Icon } from "native-base";

export class ButtonAdd extends Component {
  render() {
    return (
      <Button
        iconRight
        bordered
        style={{ borderColor: '#C53364', marginRight: 10, paddingLeft: 10 }}
        onPress={this.props.add}
      >
        <Text style={{ marginRight: 5, color: this.props.colorW }}>
          اضف {this.props.title}
        </Text>
        <Icon name="add" style={{color:this.props.colorW}} />
      </Button>
    );
  }
}

export default ButtonAdd;
