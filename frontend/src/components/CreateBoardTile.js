import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class CreateBoardTile extends Component {
  render() {
    return (
      <li className="CreateBoardTile">
        <Link className="CreateBoardTile-link" to='/boards/new'>
          Create new board…
        </Link>
      </li>
    );
  }
}

export default CreateBoardTile;
