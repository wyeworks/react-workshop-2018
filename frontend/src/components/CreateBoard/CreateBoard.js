import React, { Component } from 'react';
import './CreateBoard.css';

class CreateBoard extends Component {
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

  back = (e) => {
    e.stopPropagation();
    this.props.history.goBack();
  }

  preventBack = (e) => {
    e.stopPropagation();
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
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then((response) => {
      return response.json();
    }).then((board) =>{
      this.props.history.push(`/boards/${board.id}`);
    }).catch(function(error) {
      console.log(error);
    });
  }

  render () {
    return (
      <div onClick={this.back} className="CreateBoard-overlay">
        <div className="CreateBoard-box" onClick={this.preventBack} >
          <form onSubmit={this.handleSubmit}>
            <div className="CreateBoard-tile">
              <button type="button" className="CreateBoard-close-button" onClick={this.back}>
                <span className="icon-sm icon-close"></span>
              </button>
              <div>
                <input placeholder="Add board title" value={this.state.title} onChange={this.titleChange} className="CreateBoard-tile-input"/>
              </div>
            </div>
            <button className={`CreateBoard-tile-btn ${ this.state.title ? '' : 'disabled' }`} disabled={!this.state.title} type="">Create Board</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateBoard;
