import React, { Component } from 'react';

class NewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingList: false,
      newListName: ''
    };
  }

  toggleAddList = () => {
    this.setState(prevState => ({
      addingList: !prevState.addingList
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
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then((response) => {
      return response.json();
    }).then((list) => {
      this.props.onListCreation(list);
      this.toggleAddList();
      this.setState({newListName: ''})
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className={`NewList ${ this.state.addingList ? 'NewList-adding-list' : '' }`}>
        {
          this.state.addingList ?
            <div>
              <form onSubmit={this.handleSubmit}>
                <input className="NewList-input" type="text" name="name" placeholder="Add a list…" autoComplete="off" value={this.state.newListName} onChange={this.newListNameChange}/>
                <div className="NewList-controls">
                  <input className="NewList-button" type="submit" value="Save"/>
                  <a className="NewList-close" href="#" onClick={this.toggleAddList}></a>
                </div>
              </form>
            </div>
          :
            <span className="NewList-placeholder" onClick={this.toggleAddList}>Add a list…</span>
        }
      </div>
    );
  }
}

export default NewList;
