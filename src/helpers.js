const getHours = (hours) => (Number(hours) < 10 ? `0${hours}` : String(hours));

const to24 = (period, hours) => (period === 'PM' ? Number(hours) + 12 : hours);

const kelvinToCelsius = (k) => (k ? Math.ceil(k - 273.15) : 0);

const getTimeFromUnixMs = (ms) => {
  const date = new Date(ms * 1000);
  const time = date.toLocaleTimeString().split(':');
  const [hours, minutes, secondsWithPeriod] = time;
  const [, period] = secondsWithPeriod.split(' ');

  const convertedhours = getHours(to24(period, hours));
  return `${convertedhours}:${minutes}`;
};

export const formatWeatherResponse = (weatherData) => {
  const {
    // eslint-disable-next-line camelcase
    main: { temp, temp_min, temp_max },
    weather: weatherArray,
    wind,
    sys,
    name: locationName,
  } = weatherData;

  const { main: weatherState, description, icon } = weatherArray[0];
  const { country, sunrise: sunriseMs, sunset: sunsetMs } = sys;

  return {
    locationName,
    country,
    weatherState,
    description,
    sunrise: getTimeFromUnixMs(sunriseMs),
    sunset: getTimeFromUnixMs(sunsetMs),
    temperature: kelvinToCelsius(temp),
    tempMin: kelvinToCelsius(temp_min),
    tempMax: kelvinToCelsius(temp_max),
    windSpeed: wind.speed || 0,
    icon,
  };
};
