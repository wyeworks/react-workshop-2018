import React, { Component } from 'react';
import Card from './Card';

class ListTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards,
      composing: false,
      newCardText: ''
    };
  }

  toggleComposer = () => {
    this.setState(prevState => ({
      composing: !prevState.composing
    }));
  }

  newCardTextChange = (e) => {
    this.setState({
      newCardText: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/boards/${this.props.boardId}/lists/${this.props.id}/cards`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        card: {
          text: this.state.newCardText
        }
      }),
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }).then((response) => {
      return response.json();
    }).then((card) => {
      this.toggleComposer();
      this.setState(prevState => ({
        cards: [...prevState.cards, card],
        newCardText: ''
      }))
    }).catch(function(error) {
      console.log(error);
    });
  }

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
              this.state.cards.map((card) => {
                return <Card key={card.id} text={card.text} />
              })
            }

            {this.state.composing &&
              <div>
                <form onSubmit={this.handleSubmit}>
                  <textarea className="ListTile-composer" value={this.state.newCardText} onChange={this.newCardTextChange}></textarea>
                  <input className="ListTile-composer-add" type="submit" value="Add"/>
                  <a className="ListTile-composer-close" href="#" onClick={this.toggleComposer}></a>
                </form>
              </div>
            }
          </div>

          {!this.state.composing &&
            <a className="ListTile-add-card" href="#" onClick={this.toggleComposer}>Add a card…</a>
          }
        </div>
      </div>
    );
  }
}

export default ListTile;
