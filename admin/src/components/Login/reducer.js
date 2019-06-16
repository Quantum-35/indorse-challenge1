import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from './constant';

const initialState = {
  payload: [],
  error: [],
  loading: false,
  success: false,
  failed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        payload: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        failed: true,
        error: action.error
      };
    default:
      return state;
  }
};