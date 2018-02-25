import React, { Component } from 'react';
import logo from './logo.svg';
import './BoardsIndex.css';
import BoardTile from '../BoardTile/BoardTile';

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
        <BoardTile name="Board-1" />
        <BoardTile name="Board-2" color="rgb(150, 121, 191)" />
        <BoardTile name="Board-3" color="rgb(150, 0, 0)" />
      </div>
    );
  }
}

export default BoardsIndex;
