const ACTION_TYPES = {
  SET_CURRENT_WEATHER: 'SET_CURRENT_WEATHER',
  SET_LOCATION: 'SET_LOCATION',
};

export const setCurrentWeather = (currentWeather) => ({
  type: ACTION_TYPES.SET_CURRENT_WEATHER,
  currentWeather,
});

export const setLocation = (location) => ({
  type: ACTION_TYPES.SET_LOCATION,
  location,
});

export default ACTION_TYPES;
