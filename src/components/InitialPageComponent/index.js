import React from 'react';
import { connect } from 'react-redux';
import InitialPageComponent from './InitialPageComponent';
import {
  setCityQuery,
  startLoading,
  finishLoading,
  setCurrentWeather,
} from '../../store/actions';

const mapStateToProps = (state) => ({
  cityQuery: state.cityQuery,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setCity: ({ target }) => dispatch(setCityQuery(target.value)),
  setWeather: (weatherData) => dispatch(setCurrentWeather(weatherData)),
  startLoading: () => dispatch(startLoading()),
  finishLoading: () => dispatch(finishLoading()),
});

const ConnectedInitialPage = React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(InitialPageComponent),
);

export { ConnectedInitialPage as InitialPageComponent };
