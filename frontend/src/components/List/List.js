import React, { Component } from 'react';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="List">
        <span className="List-details">
          <span title={this.props.name} className="List-details-name">{this.props.name}</span>
        </span>
        <div>
          {
            this.props.cards.map((card, index) => {
              return <div key={`card-${index}`}>
                <b>{card.name}</b>
                {card.text}
              </div>
            })
          }
        </div>
      </div>
    );
  }
}

export default List;

List.defaultProps = {
  cards: [{ name: 'Card1', text: 'text1' }, { name: 'Card2', text: 'text2' }, { name: 'Card3', text: 'text3' }],
  name: 'List1'
};
