import React, { Component } from 'react';
import Boards from './components/Boards';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App-container">
          <div className="App-header">
            <Link className="App-header-logo" to="/">
              <span className="App-header-logo-default"></span>
            </Link>
          </div>
          <div className="App-content">
            <Route exact path='/' component={Boards}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
