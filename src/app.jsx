import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

const App = (
  <Provider store={store}>
    <div>Befuh Doctor</div>
  </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
