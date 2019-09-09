import React, { Component } from "react";
import {
    View,
    TextInput,
    Platform,
    StatusBar
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

class Explore extends Component {

    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform === 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            
                <View >
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            borderRadius: 8,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.4,
                            elevation: 1,
                             borderWidth : Platform.OS == "android" ? 2 : 0,
                             borderColor: Platform.OS == 'android' ? '#dddddd': null,
                            marginTop: Platform.OS == 'android' ? 15 : 18,
                            
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="ابحث عن موضوع"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                                onChangeText={postSearch => this.setState({postSearch})}
                            />
                        </View>
                    </View>
                </View>
            
        );
    }
}
export default Explore;