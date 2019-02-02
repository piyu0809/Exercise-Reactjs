import React , { Component } from 'react';
import earth1 from './earth1.png';
import earth2 from './earth2.png';
import earth3 from './earth3.png';
import earth4 from './earth4.png';





class Home extends Component {
  render(){
    return(
      <div className="Home">
        <div id = "cf">
        <img className="bottom2" src={earth4} height='1000' width='1850' />
        <img className="bottom1" src={earth3} height='1000' width='1850'/>
        <img className="bottom" src={earth2} height='1000' width='1850'/>
        <img className="top" src={earth1} height='1000' width='1850' />
        </div>
      </div>
    );
  }
}
export default Home;
