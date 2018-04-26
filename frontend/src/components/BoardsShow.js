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

  handleAddList(list) {
    this.setState(prevState => ({
      lists: [...prevState.lists, list]
    }));
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
                  return <List id={list.id} name={list.name} key={list.id} boardId={this.boardId} cards={list.cards}/>
                })
              }

              <CreateList boardId={this.boardId} onListCreation={this.handleAddList.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardsShow;
