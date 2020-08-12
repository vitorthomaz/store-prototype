import React from 'react';
import { screen, cleanup } from '@testing-library/react';
import { createStore } from 'redux';

import { renderWithAll } from '../../utils/testing-wrapper';
import { state } from './index.mock';

import reducers from '../../store/reducers';

import Checkout from './';

describe('Testing functionalities on <Checkout />', () => {
  beforeEach(cleanup);

  it('should show that the shopping cart is empty when the user does not select products', async () => {
    renderWithAll(<Checkout />);

    expect(screen.getByTestId('empty-cart')).toBeInTheDocument();
  });

  it('should display on the page the products that the user has added to shopping cart', async () => {
    renderWithAll(<Checkout />, { store: createStore(reducers, state) });

    expect(screen.getByTestId('shopping-cart-products')).toBeInTheDocument();
  });
});
