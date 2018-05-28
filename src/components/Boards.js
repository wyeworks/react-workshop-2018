import React, { Component } from 'react';

class Boards extends Component {
  render() {
    return (
      <div className="Boards">
        <div className="Boards-container">
          <div className="Boards-header">
            <div className="Boards-header-icon">
              <span className="Boards-header-icon-member"></span>
            </div>
            <h3 className="Boards-header-name">Personal Boards</h3>
          </div>

          <ul className="Boards-list-container">
            <li className="BoardTile">
              <a className="BoardTile-link">
                <span className="BoardTile-fade"></span>
                <span className="BoardTile-details">
                  <span className="BoardTile-details-name">
                    Workshop
                  </span>
                </span>
              </a>
            </li>
            <li className="BoardTile">
              <a className="BoardTile-link">
                <span className="BoardTile-fade"></span>
                <span className="BoardTile-details">
                  <span className="BoardTile-details-name">
                    Team
                  </span>
                </span>
              </a>
            </li>
            <li className="NewBoardLink">
              <a className="NewBoardLink-link">
                Create new board…
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Boards;
