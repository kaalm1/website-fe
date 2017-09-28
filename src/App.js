import React, { Component } from 'react';
import Main from './components/Main'
import {Container} from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Main />
      </Container>
    );
  }
}

export default App;
