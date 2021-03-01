/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

import {BrowserRouter} from "react-router-dom";

// Import root app
import App from 'containers/App';
import './styles/layout/base.scss';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!../public/favicons/favicon.ico'; // eslint-disable-line
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line

import configureStore from './redux/configureStore';

import axios from 'axios'
import './i18next';



// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

axios.defaults.baseURL = "http://localhost:80";
axios.defaults.headers.common = {
  ...axios.defaults.headers.common,
  "Access-Control-Allow-Origin": "http://localhost:3000",
  "Content-Type": "application/json",
  Authorization: localStorage.getItem("token"),
};

  ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback="loading...">
        <BrowserRouter history={history}>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>,
    MOUNT_NODE,
  );
