import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }

  }

  signIn() {
    // console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp
      .auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        // console.log('error', error);
        this.setState({ error });
      });
    // e.preventDefault();
  };

  render() {
    return (
      <div className = 'form' style = {{margin: '5%'}}>
        <h2>Sign In</h2>
        <div className = 'form-group'>
          <input
            className = 'form-control'
            type = 'text'
            style = {{marginRight: '5px'}}
            placeholder = 'email'
            onChange = { event => this.setState({ email: event.target.value }) }
            onKeyPress = { event => {
              if (event.key === 'Enter') {
                this.signIn()
              }
            } }
          />
          <input
            className = 'form-control'
            type = 'password'
            style = {{marginRight: '5px'}}
            placeholder = 'password'
            onChange = { event => this.setState({ password: event.target.value }) }
            onKeyPress = { event => {
              if (event.key === 'Enter') {
                this.signIn()
              }
            } }
          />
          <button
            className = 'btn btn-success'
            type = 'button'
            onClick = { () => this.signIn() }
          >
            Sign In
          </button>
        </div>
        <div>{ this.state.error.message }</div>
        <div><Link to = {'/signup'}>Account not created? Sign Up instead</Link></div>
      </div>
    )
  }
}

export default SignIn;
