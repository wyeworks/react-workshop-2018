import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './BoardTile.css';

class BoardTile extends Component {
  render() {
    return (
      <Link className="BoardTile" to={`/boards/${this.props.name}`} style={{backgroundColor: this.props.color}}>
        <span class="BoardTile-details">
          <span title={this.props.name} class="BoardTile-details-name">{this.props.name}</span>
        </span>
      </Link>
    );
  }
}

export default BoardTile;

BoardTile.defaultProps = {
  color: 'rgb(0, 121, 191)'
};
