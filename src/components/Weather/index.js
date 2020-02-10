// export * from './Weather';
import React from 'react';
import { connect } from 'react-redux';
import Weather from './Weather';
import {
  setCityQuery,
  startLoading,
  finishLoading,
  setCurrentWeather,
} from '../../store/actions';

const mapStateToProps = (state) => ({
  cityQuery: state.cityQuery,
  isLoading: state.isLoading,
  currentWeather: state.currentWeather,
});

const mapDispatchToProps = (dispatch) => ({
  setCity: ({ target }) => dispatch(setCityQuery(target.value)),
  setWeather: (weatherData) => dispatch(setCurrentWeather(weatherData)),
  startLoading: () => dispatch(startLoading()),
  finishLoading: () => dispatch(finishLoading()),
});

const ConnectedWeather = React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Weather),
);

export { ConnectedWeather as Weather };
