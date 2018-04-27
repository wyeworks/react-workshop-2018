import React, { Component } from 'react';
import ListTile from './ListTile';
import NewList from './NewList';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", lists: [] };
    this.boardId = this.props.match.params.bordId;
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

  render() {
    return (
      <div className="Board">
        <div className="Board-content">
          <div className="Board-header">
            <span className="Board-header-btn" href="#">
              {this.state.name}
            </span>
          </div>

          <div className="Board-canvas">
            <div className="Board-canvas-content">
              {
                this.state.lists.map((list) => {
                  return <ListTile id={list.id} name={list.name} key={list.id} boardId={this.boardId} cards={list.cards}/>
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
