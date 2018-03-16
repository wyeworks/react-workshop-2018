import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './CreateList.css';

class CreateList extends Component {
  render() {
    return (
      <li className="CreateList">
        <Link className="CreateList-link" to="/">Create new list…</Link>
      </li>
    );
  }
}

export default CreateList;
