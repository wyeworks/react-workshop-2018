import React, { Component } from 'react';
import './BoardsShow.css';
import List from '../List/List';
import CreateList from '../CreateList/CreateList';

class BoardsShow extends Component {
  render() {
    return (
      <div className="BoardsShow">
        <div className="BoardsShow-content">
          <div className="BoardsShow-header">
            <span className="BoardsShow-header-btn" href="#">
              Board Name
            </span>
          </div>

          <div className="BoardsShow-canvas">
            <div className="BoardsShow-canvas-content">
              <List name="List1" />
              <List name="List2" />

              <CreateList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardsShow;
