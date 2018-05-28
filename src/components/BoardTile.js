import React, { Component } from 'react';

class BoardTile extends Component {
  render() {
    return (
      <li className="BoardTile">
        <a className="BoardTile-link">
          <span className="BoardTile-fade"></span>
          <span className="BoardTile-details">
            <span className="BoardTile-details-name">
              {this.props.name}
            </span>
          </span>
        </a>
      </li>
    );
  }
}

export default BoardTile;
