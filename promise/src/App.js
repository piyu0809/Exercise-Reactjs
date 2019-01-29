import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: ''
    };
}
    componentWillMount() {
 var promise = new Promise( (resolve, reject) => {

  let name = 'Paul'

  if (name === 'Paul') {
   resolve("Promise resolved successfully");
  }
  else {
   reject(Error("Promise rejected"));
  }
 });

 let obj = {newName: ''};

 promise.then( result => {
  this.setState({name: result});
 }, function(error) {
  this.setState({name: error});
 });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.name}
        </header>
      </div>
    );
  }
}

export default App;
