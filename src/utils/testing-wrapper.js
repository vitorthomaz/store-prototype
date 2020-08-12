import React from 'react';
import proptypes from 'prop-types';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { render } from '@testing-library/react';

import { theme as defaultTheme } from '../global';
import { initialState as state } from '../store';
import reducers from '../store/reducers';

export const renderWithRedux = (
  component,
  {
    initialState = state,
    store = createStore(reducers, state),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  Wrapper.propTypes = {
    children: proptypes.element.isRequired
  };

  return render(component, { wrapper: Wrapper, ...renderOptions });
};

export const renderWithTheme = (
  component,
  { theme = defaultTheme, ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  Wrapper.propTypes = { children: proptypes.element };

  return render(component, { wrapper: Wrapper, ...renderOptions });
};

export const renderWithRouter = (
  component,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Router history={history}>{children}</Router>
  );

  Wrapper.propTypes = { children: proptypes.element };

  return render(component, { wrapper: Wrapper, ...renderOptions });
};

export const renderWithAll = (
  component,
  {
    theme = defaultTheme,
    initialState = state,
    store = createStore(reducers, state),
    initialRoute = '/',
    initialEntries = [initialRoute],
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
      </ThemeProvider>
    </Provider>
  );

  Wrapper.propTypes = { children: proptypes.element };

  return render(component, { wrapper: Wrapper, ...renderOptions });
};
