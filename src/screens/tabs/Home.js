import React from "react";
import { FlatList, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { View } from "native-base";
import Catagories from "../Main/Catagories";
import StartPage from "../Main/StartPage";
import SpinnerLoading from "../components/SpinnerLoading";
import { getCatagories } from "../../ApiConfig";

export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoriesData: [],
      loading: true
    };
  }

  componentDidMount() {
    getCatagories().then(res => {
      // console.log(res)
      this.setState({
        categoriesData: res.data.categories,
        loading: false
      });
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StartPage />

        <ScrollView scrollEventThrottle={16}>
          <View style={styles.flat}>
            {this.state.loading ? (
              <SpinnerLoading />
            ) : (
              <FlatList
                numColumns={2}
                data={this.state.categoriesData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <Catagories
                    id={item.id}
                    name={item.name}
                    navigation={this.props.navigation}
                    topics={this.state.categoriesData}
                  />
                )}
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  flat: {
    justifyContent: "space-between",
    alignItems: "center"
  }
});
