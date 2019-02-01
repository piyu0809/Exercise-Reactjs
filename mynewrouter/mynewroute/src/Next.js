import React , { Component } from 'react';
import { Link } from 'react-router-dom';


class Next extends Component {
  render(){
    return(
      <div>
          I am from Next.
          <ul>
            <li><Link to="/Next/123"> Nextnext </Link></li>
          </ul>
          {this.props.children}
      </div>

    );
  }
}
export default Next;
