import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_MESSAGE
} from './types';

const ROOT_URL = 'http://localhost:3090';

// Unique action creator bc of branching logic
export function signinUser({email, password}) {
  // Rtn a fn gives that gives us direct access to dispatch
  return function (dispatch) {
    // Submit email/pw to serer
    axios.post(`${ROOT_URL}/signin`, { email, password })
      // If req good:
      .then(response => {
        onSignIn(response.data.token)
      })
      // Else show error to user
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      })
  }
}

export function signupUser({ email, password }) {
  return function (dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then((response) => {
        onSignIn(response.data.token);
      })
      .catch(err => {
        dispatch(authError(JSON.parse(err.response.data).error));
      })
  }
}

function onSignIn(token) {
  // - Update state to indicate authenticated
  dispatch({ type: AUTH_USER })
  // - Save JWT Token
  localStorage.setItem('token', token);
  // - Redirect to route '/feature'
  browserHistory.push('/');
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER }
}

export function fetchMessage() {
  return function (dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      })
      .catch(err => {
        console.log('Error: ', err.response.data);
      })
  }
}
