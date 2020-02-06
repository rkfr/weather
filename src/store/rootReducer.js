import { combineReducers } from 'redux';
import isLoading from './reducers/loading';
import currentWeather from './reducers/currentWeather';
import cityQuery from './reducers/cityQuery';

const rootReducer = combineReducers({
  isLoading,
  currentWeather,
  cityQuery,
});

export default rootReducer;
