import { connect } from 'react-redux';
import TodaysWeather from './TodaysWeather';
import { getForecast } from '../../store/selectors';

const mapStateToProps = (state) => ({
  forecast: getForecast(state),
});

export default connect(mapStateToProps)(TodaysWeather);
