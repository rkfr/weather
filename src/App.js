import React, { Component } from 'react';
import { loadCurrentWeather } from './api';

class App extends Component {
  componentDidMount() {
    loadCurrentWeather('london')
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>Weather App</div>
    );
  }
}

export default App;
