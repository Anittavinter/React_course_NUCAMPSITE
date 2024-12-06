import React from 'react'; // Make sure React is imported
import { createRoot } from 'react-dom/client'; // Ensure createRoot is imported
import { Provider } from 'react-redux'; // Ensure Provider is imported from react-redux
import { store } from './app/store'; // Ensure the store is imported from the correct path
import App from './App'; // Ensure App is imported correctly

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import 'typeface-lobster';
import 'typeface-open-sans';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


