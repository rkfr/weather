import { combineReducers } from 'redux';
import currentWeather from './reducers/currentWeather';
import cityQuery from './reducers/cityQuery';
import coordinates from './reducers/coordinates';

const rootReducer = combineReducers({
  currentWeather,
  coordinates,
  cityQuery,
});

export default rootReducer;
