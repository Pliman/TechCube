import 'isomorphic-fetch';
import param from 'jquery-param';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  let error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  return response.json().then(resJson => resJson);
}

export function post(url, params) {
  const config = {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(params)
  };

  return fetch(url, config).then(checkStatus).then(parseJSON);
}

export function postForm(url, params) {
  const config = {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include',
    body: param(params)
  };

  return fetch(url, config).then(checkStatus).then(parseJSON);
}

export function get(url, query = {}) {
  const config = {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  };

  return fetch(`${url}?${param(query)}`, config).then(checkStatus).then(parseJSON);
}
