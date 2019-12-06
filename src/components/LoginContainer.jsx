import React, { Component } from 'react';
const path = require('path');

class LoginContainer extends Component {
  constructor () {
    super() 
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  //on button click functionality to update state
  onLoginSubmit (e) {
    //prevents default reload
    e.preventDefault();

    //set stating 
    this.setState({
      email: e.target.value,
      password: e.target.value
    });

    //create url variable to hold server signup address
    const url = path.resolve(__dirname, '/login');
     // submit what is currently in state entry
     fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
     
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(this.state), // body data type must match "Content-Type" header
    })
    // Todo: Authenticate;
      .then(() => {
        this.setState({
          email: '',
          password: ''
        });
        // window.location.href = path.resolve(__dirname, '/api');
      })
      // .then(() => alert('You have successfully logged in!'))
      .catch((err) => alert('Failed to fetch', err));



    //log email and passwrd submit to console
    console.log('The current state of email is: ', this.state.email);
    console.log('The current state of pswd is: ', this.state.password);
    

    //reset the state of the page to be an empty string 
    
  }

  //on user feild change upstate state
  onFeildusrChange (e) {
    this.setState({
      email: e.target.value,
    });
  };

  //on psd feild change upstate state
  onFeildpsdChange (e) {
    this.setState({
      password: e.target.value
    });
  };

  //redirect to sign up page
  siginupBtn () {
    window.location.href = path.resolve(__dirname, '/signup');
  }
  
  render() {
    return (
      <div>
        <h1>
          Login Page
        </h1>
        <form>
            <label>
              Email:
              <input type="email" value={this.state.email} onChange={(e)=> {this.onFeildusrChange(e)}}  name="name" />
            </label>
            <br/>
            <label>
               Password:
              <input type="password" value={this.state.password} onChange={(e)=> {this.onFeildpsdChange(e)}}  name="passwd" />
            </label>
            <br/>
          <input type="submit" value="Submit" onClick={(e) => this.onLoginSubmit(e)}/>
        </form>
        Click here to sign up:
        <button onClick={()=> this.siginupBtn()}>Sign up</button>
      </div>
    );
  }
}


export default LoginContainer;