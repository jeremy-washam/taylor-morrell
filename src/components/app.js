import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Nav from './nav';
import Home from './home';
import Climb from './climb';
import Adventure from './adventure';

const App = (props) => {
  return (
    <Router>
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Home} />
          <Route path="/climbing" component={Climb} />
          <Route path="/adventure" component={Adventure} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
