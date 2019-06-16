import { SIGNUP_USER, SIGNUP_FAILURE, SIGNUP_SUCCESS } from './constant';
// import apiClient from '../../axiosConfig/axiosConfig';
import axios from 'axios';

export const signupUser = () => ({ type: SIGNUP_USER });

// eslint-disable-next-line
export const signupSuccess = payload => ({ type: SIGNUP_SUCCESS, payload: payload });

export const signupFailed = error => ({ type: SIGNUP_FAILURE, error });

export const signup = data => async(dispatch) => {
  dispatch(signupUser());
  const {username, firstName, lastName, email, password, history, confirmPassword} = data;
  const payload = { username, firstName, lastName, email, password, confirmPassword };

  axios.defaults.headers.common = {
    "Content-Type": "application/json"
  }
  axios.post(`${process.env.REACT_APP_BASE_URL}api/auth/signup`, payload)
    .then(res => {
      dispatch(signupSuccess(res));
      history.push('/login')
    })
    .catch(error => {
      dispatch(signupFailed(error.response));
    })
};