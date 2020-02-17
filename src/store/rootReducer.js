import { ACTION_TYPES } from './actions';

const initialState = {
  locationQuery: '',
  currentWeather: null,
  forecast: null,
  isLoading: false,
  error: null,
  history: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SAVE_CURRENT_WEATHER: {
      return {
        ...state,
        error: null,
        currentWeather: action.weather,
      };
    }

    case ACTION_TYPES.SAVE_CURRENT_FORECAST: {
      return {
        ...state,
        error: null,
        forecast: action.forecast,
      };
    }

    case ACTION_TYPES.SET_WEATHER_LOADING_ERROR: {
      return {
        ...state,
        error: action.error,
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

    case ACTION_TYPES.SAVE_TO_HISTORY: {
      const { queryData } = action;
      const { location } = queryData;
      const { history } = state;

      const updatedHistory = [
        ...history,
      ];


      if (!history.includes(location)) {
        updatedHistory.push(queryData);
      }

      return {
        ...state,
        history: updatedHistory,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
