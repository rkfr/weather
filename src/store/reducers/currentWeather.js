import ACTION_TYPES from '../actions';

export const setCurrentWeather = (currentWeather) => ({
  type: ACTION_TYPES.SET_CURRENT_WEATHER,
  currentWeather,
});

const currentWeather = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_WEATHER: {
      return {
        ...state,
        currentWeather: action.currentWeather,
      };
    }
    default: {
      return state;
    }
  }
};

export default currentWeather;
