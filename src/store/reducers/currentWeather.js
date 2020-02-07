import ACTION_TYPES from '../actions';

const currentWeather = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_WEATHER: {
      return action.currentWeather;
    }
    default: {
      return state;
    }
  }
};

export default currentWeather;
