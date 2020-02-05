import React from 'react';
import { connect } from 'react-redux';
import InitialPageComponent from './InitialPageComponent';
import { setCityQuery } from '../../store/actions';

const mapStateToProps = (state) => ({
  cityQuery: state.cityQuery,
});

const mapDispatchToProps = (dispatch) => ({
  setCity: ({ target }) => dispatch(setCityQuery(target.value)),
});

const ConnectedInitialPage = React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(InitialPageComponent),
);

export { ConnectedInitialPage as InitialPageComponent };
