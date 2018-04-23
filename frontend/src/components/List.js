import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      composing: false,
      newCardText: ''
    };
  }

  componentDidMount() {
    fetch(`/boards/${this.props.boardId}/lists/${this.props.id}/cards`).then(res => res.json()).then((cards) => {
      this.setState({ cards });
    });
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
      this.setState({newCardText: ''});
    }).catch(function(error) {
      console.log(error);
    });
  }

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
              this.state.cards.map((card) => {
                return <Card key={card.id} text={card.text} />
              })
            }

            {this.state.composing &&
              <div>
                <form onSubmit={this.handleSubmit}>
                  <textarea className="List-composer" value={this.state.newCardText} onChange={this.newCardTextChange}></textarea>
                  <input className="List-composer-add" type="submit" value="Add"/>
                  <a className="List-composer-close" href="#" onClick={this.toggleComposer}></a>
                </form>
              </div>
            }
          </div>

          {!this.state.composing &&
            <a className="List-add-card" href="#" onClick={this.toggleComposer}>Add a card…</a>
          }
        </div>
      </div>
    );
  }
}

export default List;
