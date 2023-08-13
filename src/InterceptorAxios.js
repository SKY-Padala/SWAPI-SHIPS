import axios from 'axios';
import React from 'react';
import ReactDOM  from 'react-dom';
import LoadingSpinner from './Interceptor/SpinInteptorComponent';


let requestsCount = 0;

axios.interceptors.request.use(
  (config) => {
    requestsCount++;
    if (requestsCount === 1) {
      // Show loading spinner
      const spinner = document.createElement('div');
      spinner.id = 'axios-loading-spinner';
      document.body.appendChild(spinner);
      ReactDOM.render(<LoadingSpinner />, spinner);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    requestsCount--;
    if (requestsCount === 0) {
      // Hide loading spinner
      const spinner = document.getElementById('axios-loading-spinner');
      if (spinner) {
        document.body.removeChild(spinner);
      }
    }
    return response;
  },
  (error) => {
    requestsCount--;
    if (requestsCount === 0) {
      // Hide loading spinner
      const spinner = document.getElementById('axios-loading-spinner');
      if (spinner) {
        document.body.removeChild(spinner);
      }
    }
    return Promise.reject(error);
  }
);
