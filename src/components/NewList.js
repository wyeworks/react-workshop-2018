import React, { Component } from 'react';

class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      composing: false,
      newListName: ''
    };
  }

  toggleComposing = () => {
    this.setState(prevState => ({
      composing: !prevState.composing
    }));
  }

  newListNameChange = (e) => {
    this.setState({
      newListName: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/boards/${this.props.boardId}/lists`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        list: {
          name: this.state.newListName
        }
      }),
    }).then(res => res.json()).then((list) => {
      this.props.onListCreation(list);
      this.setState({
        composing: false,
        newListName: ''
      })
    });
  }

  render() {
    return (
      <div className="NewList">
        { this.state.composing ?
          <div className="NewList-adding-list">
            <form onSubmit={this.handleSubmit}>
              <input className="NewList-input" type="text" placeholder="Add a list…" autoFocus="true" value={this.state.newListName} onChange={this.newListNameChange}/>
              <div className="NewList-controls">
                <input className="NewList-button" type="submit" value="Save"/>
                <div className="NewList-close" onClick={this.toggleComposing}/>
              </div>
            </form>
          </div>
        :
          <a className="NewList-placeholder" onClick={this.toggleComposing}>Add a list…</a>
        }
      </div>
    );
  }
}

export default NewList;
