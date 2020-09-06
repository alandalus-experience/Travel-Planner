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

    //TODO: add input checks and everything else here before registerUser runs
    registerUser(this.state.email, this.state.password); 
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
          <input type="text" onChange={event => this.handleChange(event, "email")} />
        </label>
        <label>
          Password:
          <input type="password" onChange={event => this.handleChange(event, "password")} />
        </label>       
        <label>
          Confirm password:
          <input type="password" onChange={event => this.handleChange(event, "password2")} />
        </label>
        <input type="submit" value="Register" />
      </form>
      </>
    );
  }
}

export default RegisterUser;

