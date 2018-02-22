import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BoardsIndex from './components/BoardsIndex/BoardsIndex';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={BoardsIndex}/>
      </Router>
    );
  }
}

export default App;
