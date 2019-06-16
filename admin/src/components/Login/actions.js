import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from './constant';
// import apiClient from '../../axiosConfig/axiosConfig';
import axios from 'axios';

export const loginUser = () => ({ type: LOGIN });

// eslint-disable-next-line
export const loginSuccess = payload => ({ type: LOGIN_SUCCESS, payload: payload });

export const loginFailed = error => ({ type: LOGIN_FAILURE, error });

export const login = data => async(dispatch) => {
  dispatch(loginUser());
  const {username, password, history} = data;
  const payload = { username, password };

  axios.defaults.headers.common = {
    "Content-Type": "application/json"
  }
  axios.post(`${process.env.REACT_APP_BASE_URL}api/auth/login`, payload)
    .then(res => {
      dispatch(loginSuccess(res));
      history.push('/dashboard')
    })
    .catch(error => {
      dispatch(loginFailed(error.response));
    })
};