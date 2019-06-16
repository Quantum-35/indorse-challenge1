import { SIGNUP_USER, SIGNUP_FAILURE, SIGNUP_SUCCESS } from './constant';

const initialState = {
  payload: [],
  error: [],
  loading: false,
  success: false,
  failed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        payload: action.payload,
      };
    case SIGNUP_FAILURE:
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