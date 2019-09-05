import React from "react";
import { Text, View, Image } from "react-native";
import { Button } from "native-base";
import SpinnerLoading from '../../SpinnerLoading'

export class AccountScreen extends React.Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Button block style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('Post')}>
          <Text style={styles.buttonText}>ACOUNNNNT</Text>
        </Button>
        <SpinnerLoading/>
      </View>
    );
  }
}

export default AccountScreen;

const styles = {
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    color: "blue",
    alignItems: "center"
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: "white"
  }
};
