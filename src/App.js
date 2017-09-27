import React, { Component } from 'react';
import Main from './components/Main'
import {Container} from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Joe Teichman Website</h1>
        <Main />
      </Container>
    );
  }
}

export default App;
