import React, { Component } from 'react'
import { Container, Content, Spinner } from 'native-base';
import {Image} from 'react-native'

 class SpinnerLoading extends Component {
    render() {
        return (
            <Container>
           
            <Content>
                <Image source={require('../../../assets/Default.png')}/>
              <Spinner color={'#C53364'} />
              
            </Content>
          </Container>
        )
    }
}

export default SpinnerLoading;
