import React, { Component } from 'react';
import axios from 'axios';

const HOME_URL = 'http://localhost';

class HelloWorld extends Component {
  constructor() {
    super();
    this.state = {
      msg: '',
    };
  }

  loadHelloWorld(params) {
    const url = `${HOME_URL}/api/v0/${params}`;

    axios.get(url).then(response => {
      this.setState(response.data);
    });
  }

  componentDidMount() {
    this.loadHelloWorld('hello_world');
  }

  render() {
    return (
      <div>
        <h3>{this.state.msg}</h3>
      </div>
    );
  }
}

export default HelloWorld;
