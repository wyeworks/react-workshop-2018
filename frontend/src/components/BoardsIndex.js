import React, { Component } from 'react';
import BoardTile from './BoardTile';
import CreateBoardTile from './CreateBoardTile';

class BoardsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { boards: [] };
  }

  componentDidMount() {
    fetch("/boards").then(res => res.json()).then((boards) => {
      this.setState({ boards });
    });
  }

  render() {
    return (
      <div className="BoardsIndex">
        <div className="BoardsIndex-container">
          <div className="BoardsIndex-header">
            <div className="BoardsIndex-header-icon">
              <span className="BoardsIndex-header-icon-member"></span>
            </div>
            <h3 className="BoardsIndex-header-name">Personal Boards</h3>
          </div>

          <ul className="BoardsIndex-list-container">
            {
              this.state.boards.map((board) => {
                return <BoardTile name={board.name} id={board.id} key={board.id} />
              })
            }

            <CreateBoardTile />
          </ul>
        </div>
      </div>
    );
  }
}

export default BoardsIndex;