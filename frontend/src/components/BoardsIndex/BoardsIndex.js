import React, { Component } from 'react';
import logo from './logo.svg';
import './BoardsIndex.css';

class BoardsIndex extends Component {
  render() {
    return (
      <div className="BoardsIndex">
        <header className="BoardsIndex-header">
          <img src={logo} className="BoardsIndex-logo" alt="logo" />
          <h1 className="BoardsIndex-title">Welcome to React</h1>
        </header>
        <p className="BoardsIndex-intro">
          To get started, edit <code>src/BoardsIndex.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default BoardsIndex;
