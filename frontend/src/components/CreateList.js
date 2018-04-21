import React, { Component } from 'react';

class CreateList extends Component {
  constructor(props) {
    super(props);
    this.state = { addingList: false };
  }

  toggleAddList = () => {
    this.setState(prevState => ({
      addingList: !prevState.addingList
    }));
  }

  render() {
    return (
      <div className={`CreateList ${ this.state.addingList ? 'CreateList-adding-list' : '' }`}>
        {
          this.state.addingList ?
            <div>
              <input className="CreateList-input" type="text" name="name" placeholder="Add a list…" autoComplete="off"/>
              <div className="CreateList-controls">
                <input className="CreateList-button" type="submit" value="Save"/>
                <a className="CreateList-close" href="#" onClick={this.toggleAddList}></a>
              </div>
            </div>
          :
            <span className="CreateList-placeholder" onClick={this.toggleAddList}>Add a list…</span>
        }
      </div>
    );
  }
}

export default CreateList;
