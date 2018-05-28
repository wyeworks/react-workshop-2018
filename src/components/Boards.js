import React, { Component } from 'react';
import BoardTile from './BoardTile';

class Boards extends Component {
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
      <div className="Boards">
        <div className="Boards-container">
          <div className="Boards-header">
            <div className="Boards-header-icon">
              <span className="Boards-header-icon-member"></span>
            </div>
            <h3 className="Boards-header-name">Personal Boards</h3>
          </div>

          <ul className="Boards-list-container">
            {
              this.state.boards.map((board) => {
                return <BoardTile key={board.id} id={board.id} name={board.name} />
              })
            }
            <li className="NewBoardLink">
              <a className="NewBoardLink-link">
                Create new board…
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Boards;
