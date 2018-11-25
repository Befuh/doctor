import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { Fragment } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Content from './components/layout/Content';
import configureStore from './store/configureStore';

import './App.scss'
import 'normalize.css/normalize.css'

const store = configureStore();

const App = (
  <Provider store={store}>
    <Fragment>
      <Header/>
      <Content/>
      <Footer/>
    </Fragment>
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
