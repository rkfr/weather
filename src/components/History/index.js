import { connect } from 'react-redux';
import History from './History';
import { getHistory } from '../../store/selectors';
import { saveCurrentWeather, saveCurrentForecast } from '../../store/actions';

const mapStateToProps = (state) => ({
  history: getHistory(state),
});

const mapDispatchToProps = (dispatch) => ({
  setWeather: (weather, forecast) => {
    dispatch(saveCurrentWeather(weather));
    dispatch(saveCurrentForecast(forecast));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
