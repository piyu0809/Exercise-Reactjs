import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const Clarifai = require('clarifai');
const app = new Clarifai.App({
 apiKey: 'bc3bf213971b4f469ed83534477612fd'
});
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      name:[],
      value:[],
      name1:'',
      url: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.apiCall = this.apiCall.bind(this);
  }
  apiCall(url){
  app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict(url);
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts']

        concepts.map(concept =>{
          this.setState({
            name:[...this.state.name,concept.name],
            value:[...this.state.value,concept.value]
          })
        })
        console.log(this.state.name);

        })
      }


      update(event){
        this.setState({
          url: event.target.value
        })
      }
      handleSubmit(e){
        e.preventDefault();
        console.log(this.state.url);
        this.apiCall(this.state.url);
        
      }
  render() {
    let names = this.state.name;
    let values = this.state.value;
    return (
      <div className="App">
        <form className = "send-message-form"
            onSubmit = {this.handleSubmit}>
            <input
              type="text"
              onChange = {this.update}
              value={this.state.url}
              placeholder = "Type a url..." />
        </form>
        { names.map((name,index) => {
           return (
             <div key={index}>
               <div >{name}</div>
             </div>
           )
         })
       }
      </div>
    );
  }
}

export default App;
