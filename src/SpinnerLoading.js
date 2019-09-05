import React, { Component } from 'react'
import { Container, Header, Content, Spinner } from 'native-base';

 class SpinnerLoading extends Component {
    render() {
        return (
            <Container>
            <Header />
            <Content>
              <Spinner />
              
            </Content>
          </Container>
        )
    }
}

export default SpinnerLoading;
