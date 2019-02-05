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
    console.log("api called",url);
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
          console.log(this.state.name);
        })



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
        <h1>Get the caption for your image.</h1>
        <p>Enter the url of the image in the search box </p>
        <form
          className = "form"
            onSubmit = {this.handleSubmit}>
            <input
              className = "search-box"
              type="text"
              onChange = {this.update}
              value={this.state.url}
              placeholder = "Enter the URL and hit enter." />
        </form>
        <br />
        <img src={this.state.url} alt="new" height="500" width="700" />
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
