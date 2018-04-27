import React, { Component } from 'react';

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
      <div onClick={this.back} className="NewBoard-overlay">
        <div className="NewBoard-box" onClick={this.preventBack} >
          <form onSubmit={this.handleSubmit}>
            <div className="NewBoard-tile">
              <button type="button" className="NewBoard-close-button" onClick={this.back}>
                <span className="icon-sm icon-close"></span>
              </button>
              <div>
                <input placeholder="Add board title" value={this.state.title} onChange={this.titleChange} className="NewBoard-tile-input"/>
              </div>
            </div>
            <button className={`NewBoard-tile-btn ${ this.state.title ? '' : 'disabled' }`} disabled={!this.state.title} type="">Create Board</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewBoard;
