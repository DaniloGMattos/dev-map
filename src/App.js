import React from 'react';
import './config/ReactronConfig';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

// import { Container } from './styles';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
