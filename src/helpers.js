/* eslint-disable camelcase */
const getHours = (hours) => (Number(hours) < 10 ? `0${hours}` : String(hours));

const to24 = (period, hours) => (period === 'PM' ? Number(hours) + 12 : hours);

const kelvinToCelsius = (k) => (k ? Math.ceil(k - 273.15) : 0);

export const getDateFromUnixMs = (ms) => {
  const date = String(new Date(ms * 1000)).split(' ');
  const [dayOfWeek, month, number] = date;
  return `${dayOfWeek}, ${number} ${month}`;
};

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
    main: {
      temp, temp_min, temp_max, humidity,
    },
    weather: weatherArray,
    wind,
    sys,
    name: locationName,
  } = weatherData;

  const {
    main: weatherState, description, icon,
  } = weatherArray[0];
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
    humidity,
    icon,
  };
};

export const formatForecastResponse = (forecast) => {
  const { list } = forecast;


  const formattedList = list.map(({
    dt, main, weather, dt_txt,
  }) => {
    const time = dt_txt.split(' ')[1].slice(0, 5);
    const { temp } = main;
    const { description, icon } = weather[0];

    return {
      dt,
      time,
      icon,
      temperature: kelvinToCelsius(temp),
      description,
    };
  });

  return formattedList;
};
