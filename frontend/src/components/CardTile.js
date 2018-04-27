import React, { Component } from 'react';

class CardTile extends Component {
  render() {
    return (
      <div className="CardTile">
        <div className="CardTile-details">
          <span className="CardTile-title">{this.props.text}</span>
        </div>
      </div>
    );
  }
}

export default CardTile;
