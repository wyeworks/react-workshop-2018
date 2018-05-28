import React, { Component } from 'react';

class ListTile extends Component {
  render() {
    return (
      <div className="ListTile">
        <div className="ListTile-content">
          <div className="ListTile-header">
            <div className="ListTile-header-title">
              {this.props.name}
            </div>
          </div>
          <div className="ListTile-cards">
            {
              this.props.cards.map((card) => {
                return (
                  <div className="CardTile" key={card.id}>
                    <div className="CardTile-details">
                      <span className="CardTile-title">{card.text}</span>
                    </div>
                  </div>
                )
              })
            }
            <a className="ListTile-add-card">Add a card…</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTile;
