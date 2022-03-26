
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import "toastify-js/src/toastify.css";
import '../styles/about.css';
import '../styles/contact-me.css';
import '../styles/globals.css';
import '../styles/header.css';
import '../styles/home.css';
import '../styles/preloader.css';
import '../styles/projects.css';
import '../styles/skills.css';
import store from './../reducers/store';

function MyApp({ Component, pageProps }) {
  return (<Provider store={store}>
    <Component {...pageProps} />
  </Provider>)
}

export default MyApp
