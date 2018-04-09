import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './BoardTile.css';

class BoardTile extends Component {
  render() {
    return (
      <li className="BoardTile">
        <Link className="BoardTile-link" to={`/boards/${this.props.id}`}>
          <span className="BoardTile-fade"></span>
          <span className="BoardTile-details">
            <span className="BoardTile-details-name">
              {this.props.name}
            </span>
          </span>
        </Link>
      </li>
    );
  }
}

export default BoardTile;
