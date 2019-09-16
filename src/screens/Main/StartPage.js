import React, { Component } from "react";
import { View, TextInput, Platform, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class SearchPage extends Component {
  state = {};

  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform === "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <View>
        <View
          style={{
            height: this.startHeaderHeight,
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 9,
              flexDirection: "row",
              padding: 10,
              borderRadius: 8,
              backgroundColor: "white",
              marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "black",
              shadowOpacity: 0.4,
              elevation: 1,
              borderWidth: Platform.OS == "android" ? 2 : 0,
              borderColor: Platform.OS == "android" ? "#dddddd" : null,
              marginTop: Platform.OS == "android" ? 15 : 18,
              marginBottom: 10
            }}
          >
            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="ابحث عن حكاية"
              placeholderTextColor="grey"
              style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
              onChangeText={postSearch =>
                this.props.postSearchHandler(postSearch)
              }
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              flex: 1,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "black",
              shadowOpacity: 0.4,
              elevation: 1,
              borderWidth: Platform.OS == "android" ? 2 : 0,
              borderColor: Platform.OS == "android" ? "#dddddd" : null,
              marginTop: Platform.OS == "android" ? 15 : 18,
              marginBottom: 10
            }}
          >
            <Icon name="ios-funnel" size={28} onPress={()=>this.props.filter("Home")} />
          </View>
        </View>
      </View>
    );
  }
}
export default SearchPage;
