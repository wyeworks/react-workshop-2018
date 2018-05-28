import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NewBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };
  }

  titleChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch('/boards', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board: {
          name: this.state.title
        }
      }),
    }).then(res => res.json()).then((board) => {
      this.props.history.push(`/boards/${board.id}`);
    });
  }

  render () {
    return (
      <div className="NewBoard-overlay">
        <div className="NewBoard-box">
          <form onSubmit={this.handleSubmit}>
            <div className="NewBoard-tile">
              <Link to='/'>
                <button type="button" className="NewBoard-close-button">
                  <span className="icon-sm icon-close"></span>
                </button>
              </Link>
              <div>
                <input placeholder="Add board title" className="NewBoard-tile-input" value={this.state.title} onChange={this.titleChange} />
              </div>
            </div>
            <button className="NewBoard-tile-btn" type="">Create Board</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBoard;
