import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util';
import configureStore from './store/store';

// window.login = APIUtil.login;
// window.signup = APIUtil.signup;
// window.logout = APIUtil.logout;



document.addEventListener('DOMContentLoaded', () => {
  const groot = document.getElementById('groot');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, groot);
});
