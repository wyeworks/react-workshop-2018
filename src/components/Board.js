import React, { Component } from 'react';
import ListTile from './ListTile';
import NewList from './NewList';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", lists: [] };
    this.boardId = this.props.match.params.boardId;
  }

  componentDidMount() {
    fetch(`/boards/${this.boardId}`).then(res => res.json()).then((board) => {
      this.setState({
        name: board.name,
        lists: board.lists
      });
    });
  }

  handleAddList(list) {
    this.setState(prevState => ({
      lists: [...prevState.lists, list]
    }));
  }

  handleRemoveList = (listId) => {
    let array = [...this.state.lists]; // Make a separate copy of the array
    const index = array.findIndex(l => l.id === listId); // find the index of the list item I want to remove

    if (index > -1) { // item found?
      array.splice(index, 1); // remove item
      this.setState({ lists: array }); // update state without that item
    }
  }

  render() {
    return (
      <div className="Board">
        <div className="Board-content">
          <div className="Board-header">
            <span className="Board-header-btn">
              {this.state.name}
            </span>
          </div>
          <div className="Board-canvas">
            <div className="Board-canvas-content">
              {
                this.state.lists.map((list) => {
                  return <ListTile key={list.id} id={list.id} name={list.name} boardId={this.boardId} cards={list.cards} onListDeletion={this.handleRemoveList}/>
                })
              }
              <NewList boardId={this.boardId} onListCreation={this.handleAddList.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
