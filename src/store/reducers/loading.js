import ACTION_TYPES from '../actions';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.START_LOADING: {
      return true;
    }

    case ACTION_TYPES.FINISH_LOADING: {
      return false;
    }

    default: {
      return state;
    }
  }
};

export default isLoading;
