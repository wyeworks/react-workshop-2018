import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BoardsIndex from './components/BoardsIndex/BoardsIndex';
import BoardsShow from './components/BoardsShow/BoardsShow';
import CreateBoard from './components/CreateBoard/CreateBoard';
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
            <Switch>
              <Route exact path='/' component={BoardsIndex}/>
              <Route path='/boards/new' component={BoardsIndex}/>
              <Route path='/boards/:bordId' component={BoardsShow}/>
            </Switch>
          </div>
          <Route path="/boards/new" component={CreateBoard} />
        </div>
      </Router>
    );
  }
}

export default App;
