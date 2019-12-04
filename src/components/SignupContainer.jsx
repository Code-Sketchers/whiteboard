import React, { Component } from 'react';

class SignupContainer extends Component {
  constructor () {
    super() 
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }

  //on button click functionality to update state
  onSignupSubmit (e) {
    //prevents default reload
    e.preventDefault();

    //set stating 
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value,
      email: e.target.value,
      password: e.target.value
    });

    //create url variable to hold server signup[ address
    const url = 'http://localhost:4000/signup';
     // submit what is currently in state entry
     console.log("sending req")
     fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
      body: JSON.stringify(this.state), // body data type must match "Content-Type" header
    })
      // .then((res) => res.json())
      // .then((data) => console.log('email, pass, first and last Name successfully sent!!'))
      .then(() => {
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        });
        window.location.href = 'http://localhost:3000/api'
      })
      .catch((err) => console.log('Failed to fetch', err));


    //log email and passwrd submit to console - confirm state has been updated with proper data
    // console.log('The current state of firstName is: ', this.state.firstName);
    // console.log('The current state of lastName is: ', this.state.lastName);
    // console.log('The current state of email is: ', this.state.email);
    // console.log('The current state of pswd is: ', this.state.password);
    

    //reset the state of the page to be an empty string 
    // this.setState({
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   password: ''
    // });
  }

  //on firstName feild change upstate state
  onFeildfnChange (e) {
    this.setState({
      firstName: e.target.value,
    });
  };
  //on lastName feild change upstate state
  onFeildlastNameChange (e) {
    this.setState({
      lastName: e.target.value,
    });
  };

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
  loginupBtn () {
    window.location.href = 'http://localhost:3000/login'
  }

  render() {

    return (
      <div>
        <h1>
          Signup Page
        </h1>
        <form>
            <label>
              First Name:
              <input type="text" value={this.state.firstName} onChange={(e)=> {this.onFeildfnChange(e)}}  Name="firstNameName" />
            </label>
              <br/>
            <label>
              Last Name:
              <input type="text" value={this.state.lastName} onChange={(e)=> {this.onFeildlastNameChange(e)}}  Name="lastName" />
            </label>
              <br/>
            <label>
              Email:
              <input type="text" value={this.state.email} onChange={(e)=> {this.onFeildusrChange(e)}}  Name="email" />
            </label>
            <br/>
            <label>
               Password:
              <input type="text" value={this.state.password} onChange={(e)=> {this.onFeildpsdChange(e)}}  Name="passwd" />
            </label>
            <br/>
          <input type="submit" value="Submit" onClick={(e) => this.onSignupSubmit(e)}/>
        </form>
        Aleady have an account? Log in here:
        <button onClick={()=> this.loginupBtn()}>log in</button>
      </div>
      
    );
  }
}


export default SignupContainer;