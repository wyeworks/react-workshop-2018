import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Boards from './components/Boards';
import BoardsShow from './components/BoardsShow';
import CreateBoard from './components/CreateBoard';

class WyeTrello extends Component {
  render() {
    return (
      <Router>
        <div className="WyeTrello-container">
          <div className="WyeTrello-header">
            <Link className="WyeTrello-header-logo" to="/">
              <span className="WyeTrello-header-logo-default"></span>
            </Link>
          </div>

          <div className="WyeTrello-content">
            <Switch>
              <Route exact path='/' component={Boards}/>
              <Route path='/boards/new' component={Boards}/>
              <Route path='/boards/:bordId' component={BoardsShow}/>
            </Switch>
          </div>
          <Route path="/boards/new" component={CreateBoard} />
        </div>
      </Router>
    );
  }
}

export default WyeTrello;
