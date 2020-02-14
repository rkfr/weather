import React from 'react';
import './App.scss';

import { Switch, Route } from 'react-router-dom';
import InitialPageComponent from './components/InitialPageComponent';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

const App = () => (
  <div className="app">
    <Switch>
      <Route path="/weather/:id">
        <Weather />
      </Route>
      <Route path="/forecast/:id">
        <Forecast />
      </Route>
      <Route path="/">
        <InitialPageComponent />
      </Route>
    </Switch>
  </div>
);
export default App;
