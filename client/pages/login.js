// NextJS modules
import Head from 'next/head'

// React modules
import React, { Component } from 'react';

// Components
import MainNav from '../components/Navigation/MainNav';

// Other imports
//TODO: Implement loginUser functionality
import {loginUser} from '../utils/firebase';

class LoginUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    //TODO: add input checks and everything else here before loginUser runs
    // loginUser(this.state.email, this.state.password); 
  }

  render() {
    return (
      <>
      <Head>
        <title>Travel Planner - Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNav />
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" onChange={event => this.handleChange(event, "email")} />
        </label>
        <label>
          Password:
          <input type="password" onChange={event => this.handleChange(event, "password")} />
        </label>       
        <input type="submit" value="Login" />
      </form>
      </>
    );
  }
}

export default LoginUser;