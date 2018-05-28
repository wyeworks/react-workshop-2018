import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <div className="Board-content">
          <div className="Board-header">
            <span className="Board-header-btn">
              BoardId: {this.props.match.params.boardId}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
