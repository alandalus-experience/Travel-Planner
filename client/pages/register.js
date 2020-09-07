// NextJS modules
import Head from 'next/head'

// React modules
import React, { Component } from 'react';

// Components
import MainNav from '../components/Navigation/MainNav';

// Other Imports
import {registerUser} from '../utils/firebase';


class RegisterUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password2: ''
    };
  }

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.password === this.state.password2) {
      registerUser(this.state.email, this.state.password);
      return
    }
    //TODO: handle validation errors and show them on the screen
    console.log("passwords don't match");

  }



  render() {
    return (
      <>
      <Head>
        <title>Travel Planner - Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNav />
      {/* TODO: Form has to become a component and depending on the number input fields should render login or register pages accordingly*/}
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" onChange={event => this.handleChange(event, "email")} value={this.state.email} required/>
        </label>
        <label>
          Password:
          <input type="password" onChange={event => this.handleChange(event, "password")} value={this.state.password} minLength={8} maxLength={256} required/>
        </label>       
        <label>
          Confirm password:
          <input type="password" onChange={event => this.handleChange(event, "password2")} value={this.state.password2} required/>
        </label>
        <input type="submit" value="Register" />
      </form>
      </>
    );
  }
}

export default RegisterUser;