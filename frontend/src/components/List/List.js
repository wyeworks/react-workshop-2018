import React, { Component } from 'react';
import Card from '../Card/Card';
import './List.css';

class List extends Component {
  render() {
    return (
      <div className="List">
        <div className="List-content">
          <div className="List-header">
            <div className="List-header-title">
              {this.props.name}
            </div>
          </div>

          <div className="List-cards">
            {
              this.props.cards.map((card, index) => {
                return <Card key={`card-${index}`} title={card} />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default List;

List.defaultProps = {
  cards: ['text1', 'text2', 'text3'],
  name: 'List1'
};
