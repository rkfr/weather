import React from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';
import InitialPageComponent from './components/InitialPageComponent';
import Weather from './components/Weather';

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/weather/:id">
        <Weather />
      </Route>
      <Route path="/">
        <InitialPageComponent />
      </Route>
    </Switch>
  </div>
);
export default App;
