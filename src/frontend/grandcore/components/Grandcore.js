import React, { Component } from 'react';

import '../styles/Grandcore.css';
import HelloWorld from './HelloWorld.js';

class Grandcore extends Component {
  render() {
    return (
      <div>
        <h1>Grandcore!</h1>
        <HelloWorld />
      </div>
    );
  }
}

export default Grandcore;
