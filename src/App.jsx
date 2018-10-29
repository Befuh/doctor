import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import configureStore from './store/configureStore';
import SearchForm from './components/patients/SearchForm';

import './App.scss'
import 'normalize.css/normalize.css'

const store = configureStore();

const App = (
  <Provider store={store}>
    <Fragment>
      <Header/>
      {/*<SearchForm/>*/}
      {/*<Footer/>*/}
    </Fragment>
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
