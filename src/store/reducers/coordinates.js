import ACTION_TYPES from '../actions';

const initialState = {
  lat: null,
  lon: null,
};

const coordinates = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_COORDINATES: {
      return {
        ...state,
        coordinates: {
          lat: action.lat,
          lon: action.lon,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default coordinates;
