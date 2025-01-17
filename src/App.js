import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ApiButtons from './components/ApiButtons'; // Default import

const App = () => (
  <Provider store={store}>
    <ApiButtons />
  </Provider>
);

export default App;