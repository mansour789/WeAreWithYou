import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Aboutus extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#C53364" }}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/fullLogo.png")}
          />
        </View>

       <View>

          <Text style={styles.name}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            dolor eos amet expedita voluptatem consequuntur non soluta, error,
            impedit rerum quibusdam unde incidunt! Autem modi sequi temporibus,
            ducimus quis reiciendis?
          </Text>
       </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20
  },

  headerContent: {
    flex: 1,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50
  },
  avatar: {
    width: 250,
    height: 150,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    backgroundColor: "white"
  },
  name: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "600"
  }
});
