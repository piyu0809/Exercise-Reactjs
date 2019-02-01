import React , { Component } from 'react';
import galaxy from './galaxy.gif';
import earth from './earth.gif';


class Home extends Component {
  render(){
    return(
      <div className="Home">
        <div id = "cf">
        <img className="bottom" src={galaxy} height='800' width='1850'/>
        <img className="top" src={earth} height='800' width='1850' />
        </div>
      </div>
    );
  }
}
export default Home;
