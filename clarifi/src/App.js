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
      name1:''
    };
  }
  componentWillMount(){
  app.models.initModel({id: Clarifai.GENERAL_MODEL, version: "aa7f35c01e0642fda5cf400f543e7c40"})
      .then(generalModel => {
        return generalModel.predict("https://samples.clarifai.com/metro-north.jpg");
      })
      .then(response => {
        var concepts = response['outputs'][0]['data']['concepts']

        concepts.map(concept =>{
          this.setState({
            name:[...this.state.name,concept.name],
            value:[...this.state.value,concept.value]
          })
        })
        console.log(this.state.name)

        })


    }
  render() {
    let names = this.state.name;
    let values = this.state.value;
    return (
      <div className="App">
        <input type="text" placeholder="Enter the image url" />

        { names.map((name,index) => {
           return (
             <div key={index}>
               <div >{name}</div>
                 { values.map((value,index) => {
                    return (
                      <div key={index}>
                        <div >{value}</div>

                      </div>
                    )
                  })
                }
             </div>
           )
         })
       }
      </div>
    );
  }
}

export default App;
