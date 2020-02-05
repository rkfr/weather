import { connect } from 'react-redux';
import FindLocation from './FindLocation';
import { setLocation, setCurrentWeather } from '../../store/actions';

const mapStateToProps = (state) => ({
  location: state.location,
  currentWeather: state.currentWeather,
});

const mapDispatchToProps = { setLocation, setCurrentWeather };

const ConnectedFindLocation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FindLocation);

export { ConnectedFindLocation as FindLocation };
