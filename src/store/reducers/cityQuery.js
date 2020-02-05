import ACTION_TYPES from '../actions';

const cityQuery = (state = '', action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CITY_QUERY: {
      return action.cityQuery;
    }

    default: {
      return state;
    }
  }
};

export default cityQuery;
