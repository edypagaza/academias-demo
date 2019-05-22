import React from 'react';
import SimpleNavBar from './SimpleNavBar';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Text from './Text';
import Form from './Form';
import User from './User';
import Home from './Home';
import '../styles/app.css';
import { Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Router>
        <SimpleNavBar/>
        <div className="main-container">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/text" component={Text}/>
            <Route path="/form" component={Form}/>
            <Route path="/user" component={User}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
