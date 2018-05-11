import axios from 'axios';
import { VIMEO_ClIENT_ID, VIMEO_CLIENT_SECRET } from '../config';
import * as ActionTypes from '../actionTypes/authorization';
import { getCookie, setCookie, deleteCookie } from '../utils/cookie';

export function fetchAuthorizationLoading() {
  return {
    type: ActionTypes.FETCH_AUTHORIZATION_LOADING
  }
}

export function fetchAuthorizationSuccess(response) {
  setCookie('token', response.data.access_token);
  return {
    type: ActionTypes.FETCH_AUTHORIZATION_SUCCESS,
    payload: response.data
  }
}

export function fetchAuthorizationFailure(response) {
  console.log('fetchAuthorizationFailure', response);
  return {
    type: ActionTypes.FETCH_AUTHORIZATION_FAILURE,
    payload: error
  }
}

export function fetchAuthorization(id) {
  const request = axios({
    method: 'post',
    url: `https://api.vimeo.com/oauth/authorize/client`,
    headers: {
      "Authorization": "Basic " + btoa(`${VIMEO_ClIENT_ID}:${VIMEO_CLIENT_SECRET}`)
    },
    params: {
      "grant_type": "client_credentials"
    }
  });
  return {
    type: ActionTypes.FETCH_AUTHORIZATION,
    payload: request
  };
}

export function resetActiveAuthorization() {
  return {
    type: ActionTypes.RESET_ACTIVE_AUTHORIZATION
  }
}
