import { combineReducers } from 'redux';
import currentWeather from './reducers/currentWeather';

const rootReducer = combineReducers({
  currentWeather,
  location: null,
});

export default rootReducer;
