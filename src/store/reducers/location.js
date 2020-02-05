import ACTION_TYPES from '../actions';

const location = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOCATION: {
      return {
        ...state,
        location: action.location,
      };
    }

    default: {
      return state;
    }
  }
};

export default location;
