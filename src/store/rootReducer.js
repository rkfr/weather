import { combineReducers } from 'redux';
import currentWeather from './reducers/currentWeather';
import location from './reducers/location';

const rootReducer = combineReducers({
  currentWeather,
  location,
});

export default rootReducer;
