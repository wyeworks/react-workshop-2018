import React, { Component } from 'react';
import ListTile from './ListTile';

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
                  return <ListTile key={list.id} id={list.id} name={list.name} boardId={this.boardId} cards={list.cards}/>
                })
              }
              <div className="NewList">
                <a className="NewList-placeholder">Add a list…</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
