import React, { Component } from 'react';
var firebase = require('firebase');


  var config = {
    apiKey: "AIzaSyB8LHrXGjyIz5BR3iQChGbafUdsZNGyZtU",
    authDomain: "login-ccc29.firebaseapp.com",
    databaseURL: "https://login-ccc29.firebaseio.com",
    projectId: "login-ccc29",
    storageBucket: "login-ccc29.appspot.com",
    messagingSenderId: "989923186091"
  };
  firebase.initializeApp(config);




class Authen extends Component {

  login (event) {
    const email = this.refs.email.value
    const password = this.refs.password.value
    const auth = firebase.auth()
    const promise = auth.signInWithEmailAndPassword(email, password)

    promise
    .then(user => {
      console.log(user)
      let lout = document.getElementById('logout')
      let message = `Welcome ${user.user.email}`
      this.setState({err: message})

      lout.classList.remove('hide')
    })
    .catch(e => {
      let err = e.message
      console.log(err)
      this.setState({err: err})
    })
  }

  signup () {
    const email = this.refs.email.value
    const password = this.refs.password.value
    const auth = firebase.auth()
    const promise = auth.createUserWithEmailAndPassword(email, password)
    promise
    .then(user => {
      let err = `Welcome ${user.user.email}`
      console.log(user)
      console.log(user.user.uid)
      firebase.database().ref('users/'+user.user.uid).set({
        email: user.user.email
      })
      console.log(user)
      this.setState({err: err})
    })
    .catch( e => {
      let err = e.message
      console.log(err)
      this.setState({err: err})
    })
  }
  logout(){
    const auth = firebase.auth();
    auth.signOut();
    var lout = document.getElementById('logout');
    lout.classList.add('hide');

  }
  google(){

    var provider = new firebase.auth.GoogleAuthProvider();
  //  var promise = firebase.auth().signInWithPopup(provider);
    var promise1 = firebase.auth().signInWithRedirect(provider);
    var promise2 = firebase.auth().getRedirectResult();
    promise2.then(result =>{
      var user = result.user;
      console.log(result);
    })
/*
    promise.then(result =>{
      var user = result.user;
      console.log(result);
      firebase.database().ref('users/'+user.uid).set({
        email: user.email,
        name: user.displayName
      });
    })

    */
  }


  constructor(props){
    super(props);

    this.state = {
      err: ''
    };

    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.google = this.google.bind(this);
  }

  render(){
    return(
      <div>
        <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
        <input id="pass" ref="password" type="password" placeholder="Enter your password" /><br />
        <p>{this.state.err}</p>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.signup}>Sign Up</button>
        <button onClick={this.logout} id="logout" className="hide">Log Out</button> <br />
        <button onClick={this.google} id="google" className="google">SignInWithGoogle</button>



      </div>
    );
  }
}


export default Authen;
