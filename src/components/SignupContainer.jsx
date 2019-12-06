import React, { Component } from "react";

export default class SignupContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };

    this.onSignupSubmit = this.onSignupSubmit.bind(this);
  }

  //on button click functionality to update state
  onSignupSubmit(e) {
    //prevents default reload
    e.preventDefault();

    //set stating
    // Todo: We do not want to save the password as plain text in the state;
    this.setState({
      firstName: e.target.value,
      lastName: e.target.value,
      email: e.target.value,
      password: e.target.value
    });

    // Todo: Build authentication for users' signup
    //create url variable to hold server signup[ address
    const url = window.location.hostname + "/signup";
    // submit what is currently in state entry
    console.log("sending req");
    fetch(url, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state) // body data type must match "Content-Type" header
    })
      .then(() => {
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        });
        // Todo: this redirect to the api after signup;
        window.location.href = window.location.hostname + "/api";
      })
      .catch(err => console.log("Failed to fetch", err));
  }

  //on firstName Field change upstate state
  onFieldfnChange(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  //on lastName Field change upstate state
  onFieldlastNameChange(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  //on user Field change upstate state
  onFieldusrChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  //on psd Field change upstate state
  onFieldpsdChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  //redirect to sign up page
  loginupBtn() {
    window.location.href = window.location.hostname + "/login";
  }

  render() {
    console.log("Props: ", this.props.closeSignUpContainer);
    return (
      <div className="fullscreen-container">
        <div className="popup">
          <div className="popup_inner">
            <div className="spacer10"></div>
            <h1>SIGN UP</h1>
            <form>
              <label>
                First Name:
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={e => {
                    this.onFieldfnChange(e);
                  }}
                  name="firstName"
                />
              </label>
              <br />
              <label>
                Last Name:
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={e => {
                    this.onFieldlastNameChange(e);
                  }}
                  name="lastName"
                />
              </label>
              <br />
              <label>
                Email:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={e => {
                    this.onFieldusrChange(e);
                  }}
                  name="email"
                />
              </label>
              <br />
              <label>
                Password:
                <input
                  type="text"
                  value={this.state.password}
                  onChange={e => {
                    this.onFieldpsdChange(e);
                  }}
                  name="passwd"
                />
              </label>
              <br />
              <div className="spacer10"></div>
              <input
                type="submit"
                value="Submit"
                onClick={e => this.onSignupSubmit(e)}
              />
            </form>
            <div className="spacer10"></div>
            <div className="spacer10"></div>
            <div className="spacer10"></div>
            Aleady have an account? Log in:
            <button onClick={() => this.loginupBtn()}>Log In</button>
            <div className="spacer10"></div>
            <button onClick={this.props.closeSignUpContainer}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}
