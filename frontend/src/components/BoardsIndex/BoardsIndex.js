import React, { Component } from 'react';
import './BoardsIndex.css';
import BoardTile from '../BoardTile/BoardTile';
import CreateBoardTile from '../CreateBoardTile/CreateBoardTile';

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
                return <BoardTile name={board.name} key={board.id} />
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
