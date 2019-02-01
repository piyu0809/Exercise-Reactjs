import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import Next from './Next';
import Nextnext from './Nextnext';
import './App.css';


import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(<Router>
  <div>
    <ul>
      <div className="header">
      <li><Link className="link" to="/">Home</Link></li>
      <li><Link className="link" to="/contact">Contact</Link></li>
      <li><Link className="link"  to="/services">Services</Link></li>
      <li><Link className="link" to="/next">Next</Link></li>
      </div>
      <br />
      <br />

      <Route exact path="/" component={ Home } />
      <Route path="/contact" component={ Contact } />
      <Route path="/services" component={ Services } />
      <Route path="/next" component={ Next }>
        <Route path="/Next/123" component={ Nextnext } />
      </Route>


    </ul>
  </div>
</Router> , document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
