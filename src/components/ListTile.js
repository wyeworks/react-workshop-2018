import React, { Component } from 'react';

class ListTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      composing: false,
      newCardText: ''
    };
  }

  toggleComposer = () => {
    this.setState(prevState => ({
      composing: !prevState.composing
    }));
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
            { this.state.composing ?
              <div>
                <form>
                  <textarea className="ListTile-composer"></textarea>
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
