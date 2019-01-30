import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Masthead from './Masthead'
import Footer from './Footer';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Masthead />
        <Container />






        <hr />

        <Footer />

      </div>
    );
  }
}

export default App;
