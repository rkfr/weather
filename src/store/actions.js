const ACTION_TYPES = {
  SET_CURRENT_WEATHER: 'SET_CURRENT_WEATHER',
  SET_CITY_QUERY: 'SET_CITY_QUERY',
  START_LOADING: 'START_LOADING',
  FINISH_LOADING: 'FINISH_LOADING',
};

export const setCurrentWeather = (currentWeather) => ({
  type: ACTION_TYPES.SET_CURRENT_WEATHER,
  currentWeather,
});

export const setCityQuery = (cityQuery) => ({
  type: ACTION_TYPES.SET_CITY_QUERY,
  cityQuery,
});

export const startLoading = () => ({
  type: ACTION_TYPES.START_LOADING,
});

export const finishLoading = () => ({
  type: ACTION_TYPES.FINISH_LOADING,
});

export default ACTION_TYPES;
