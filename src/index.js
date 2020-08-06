import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';

import { ErrorBoundary } from './components';

import { theme } from './global';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
