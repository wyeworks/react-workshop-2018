import React, { Component } from 'react';

class ListTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      composing: false,
      cards: props.cards,
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
    }).then(res => res.json()).then((card) => {
      this.setState(prevState => ({
        composing: false,
        cards: [...prevState.cards, card],
        newCardText: ''
      }))
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
                return (
                  <div className="CardTile" key={card.id}>
                    <div className="CardTile-details">
                      <span className="CardTile-title">{card.text}</span>
                    </div>
                  </div>
                )
              })
            }
            { this.state.composing ?
              <div>
                <form onSubmit={this.handleSubmit}>
                  <textarea className="ListTile-composer" value={this.state.newCardText} onChange={this.newCardTextChange}></textarea>
                  <input className="ListTile-composer-add" type="submit" value="Add"/>
                  <div className="ListTile-composer-close" onClick={this.toggleComposer}></div>
                </form>
              </div>
            :
              <a className="ListTile-add-card" onClick={this.toggleComposer}>Add a card…</a>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ListTile;
