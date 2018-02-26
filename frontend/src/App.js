import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BoardsIndex from './components/BoardsIndex/BoardsIndex';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-container">
          <div className="App-header">
            <Link className="App-header-logo" to="/">
              <span className="App-header-logo-default"></span>
            </Link>
          </div>

          <div className="App-content">
            <Route exact path='/' component={BoardsIndex}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
