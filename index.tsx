import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyB9i2sl7JiBuqlm_y07BQ_XOMi7jSuDNms',
  authDomain: 'react-app-playground-2299f.firebaseapp.com',
  projectId: 'react-app-playground-2299f',
  storageBucket: 'react-app-playground-2299f.appspot.com',
  messagingSenderId: '301893495148',
  appId: '1:301893495148:web:a46856efacf881a3582b49',
  measurementId: 'G-XT7D56N58Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
