import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BoardsIndex from './components/BoardsIndex/BoardsIndex';
import BoardsShow from './components/BoardsShow/BoardsShow';
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
            <Route path="/boards/:bordId" component={BoardsShow} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
