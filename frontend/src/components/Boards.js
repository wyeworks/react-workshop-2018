import React, { Component } from 'react';
import BoardTile from './BoardTile';
import NewBoardLink from './NewBoardLink';

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
                return <BoardTile name={board.name} id={board.id} key={board.id} />
              })
            }

            <NewBoardLink />
          </ul>
        </div>
      </div>
    );
  }
}

export default Boards;
