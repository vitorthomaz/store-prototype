import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { renderWithAll } from '../../utils/testing-wrapper';

import Home from './';

describe('Testing functionalities of page <Home />', () => {
  afterEach(cleanup);

  it('should render page with an input', () => {
    renderWithAll(<Home />);

    expect(screen.getByTestId('user-input')).toBeInTheDocument();
  });

  it('should render page with an empty shopping cart', () => {
    renderWithAll(<Home />);

    expect(screen.getByTestId('shopping-cart')).toHaveTextContent(0);
  });
});
