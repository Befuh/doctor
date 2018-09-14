import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import SearchForm from './components/patients/SearchForm';

const store = configureStore();

const App = (
  <Provider store={store}>
    <SearchForm/>
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
