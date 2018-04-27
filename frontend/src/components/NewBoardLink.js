import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NewBoardLink extends Component {
  render() {
    return (
      <li className="NewBoardLink">
        <Link className="NewBoardLink-link" to='/boards/new'>
          Create new board…
        </Link>
      </li>
    );
  }
}

export default NewBoardLink;
