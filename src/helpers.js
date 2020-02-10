const getHours = (hours) => (Number(hours) < 10 ? `0${hours}` : String(hours));

const to24 = (period, hours) => (period === 'PM' ? Number(hours) + 12 : hours);

export const kelvinToCelsius = (k) => (k ? Math.ceil(k - 273.15) : 0);

export const getTomeFromMilliseconds = (ms) => {
  const date = new Date(ms * 1000);
  const time = date.toLocaleTimeString().split(':');
  const [hours, minutes, secondsWithPeriod] = time;
  const [, period] = secondsWithPeriod.split(' ');

  const convertedhours = getHours(to24(period, hours));
  return `${convertedhours}:${minutes}`;
};
