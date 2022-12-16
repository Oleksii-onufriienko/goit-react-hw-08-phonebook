import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

import store, { persistedStor } from 'redux/store';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
