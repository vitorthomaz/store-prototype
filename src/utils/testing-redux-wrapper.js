import React from 'react';
import proptypes from 'prop-types';
import { render as originalRender } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../store';

const render = (component, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  Wrapper.propTypes = {
    children: proptypes.element.isRequired
  };

  return originalRender(component, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { render };
