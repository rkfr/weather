import { connect } from 'react-redux';
import TodaysWeather from './TodaysWeather';
import { getForecastForToday } from '../../store/selectors';

const mapStateToProps = (state) => ({
  forecast: getForecastForToday(state),
});

export default connect(mapStateToProps)(TodaysWeather);
