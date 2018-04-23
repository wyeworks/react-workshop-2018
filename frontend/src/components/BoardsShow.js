import React, { Component } from 'react';
import List from './List';
import CreateList from './CreateList';

class BoardsShow extends Component {
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

  render() {
    return (
      <div className="BoardsShow">
        <div className="BoardsShow-content">
          <div className="BoardsShow-header">
            <span className="BoardsShow-header-btn" href="#">
              {this.state.name}
            </span>
          </div>

          <div className="BoardsShow-canvas">
            <div className="BoardsShow-canvas-content">
              {
                this.state.lists.map((list) => {
                  return <List name={list.name} key={list.id} />
                })
              }

              <CreateList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardsShow;
