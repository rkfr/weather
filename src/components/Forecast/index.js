import { connect } from 'react-redux';
import Forecast from './Forecast';
import { getForecastByDays } from '../../store/selectors';

const mapStateToprops = (state) => ({
  forecast: getForecastByDays(state),
});

export default connect(mapStateToprops)(Forecast);
