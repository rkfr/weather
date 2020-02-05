const ACTION_TYPES = {
  SET_CURRENT_WEATHER: 'SET_CURRENT_WEATHER',
  SET_CITY_QUERY: 'SET_CITY_QUERY',
  SET_COORDINATES: 'SET_COORDINATES',
};

export const setCurrentWeather = (currentWeather) => ({
  type: ACTION_TYPES.SET_CURRENT_WEATHER,
  currentWeather,
});

export const setCityQuery = (cityQuery) => ({
  type: ACTION_TYPES.SET_CITY_QUERY,
  cityQuery,
});

export const setCoordinates = (lat, lon) => ({
  type: ACTION_TYPES.SET_COORDINATES,
  lat,
  lon,
});

export default ACTION_TYPES;
