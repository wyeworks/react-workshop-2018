import React, { Component } from 'react';
import './BoardsIndex.css';
import BoardTile from '../BoardTile/BoardTile';
import CreateBoardTile from '../CreateBoardTile/CreateBoardTile';

class BoardsIndex extends Component {
  render() {
    return (
      <div className="BoardsIndex">
        <div className="BoardsIndex-container">
          <div className="BoardsIndex-header">
            <div className="BoardsIndex-header-icon">
              <span className="BoardsIndex-header-icon-member"></span>
            </div>
            <h3 className="BoardsIndex-header-name">Personal Boards</h3>
          </div>

          <ul className="BoardsIndex-list-container">
            <BoardTile name="Board-1" />
            <BoardTile name="Board-2" color="rgb(150, 121, 191)" />
            <BoardTile name="Board-3" color="rgb(150, 0, 0)" />

            <CreateBoardTile />
          </ul>
        </div>
      </div>
    );
  }
}

export default BoardsIndex;
