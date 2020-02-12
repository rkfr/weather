import { ACTION_TYPES } from './actions';

import { formatWeatherResponse } from '../helpers';

const initialState = {
  locationQuery: '',
  currentWeather: null,
  isLoading: false,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_CURRENT_WEATHER: {
      return {
        ...state,
        error: null,
        currentWeather: formatWeatherResponse(action.weather),
      };
    }

    case ACTION_TYPES.SET_WEATHER_LOADING_ERROR: {
      return {
        ...state,
        error: action.error,
        currentWeather: null,
      };
    }

    case ACTION_TYPES.START_LOADING: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }

    case ACTION_TYPES.STOP_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ACTION_TYPES.SET_LOCATION_QUERY: {
      return {
        ...state,
        locationQuery: action.query,
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
