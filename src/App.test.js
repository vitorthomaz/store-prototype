import React from 'react';
import { renderWithAll } from './utils/testing-wrapper';
import { screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App } from './App';

describe('Testing page routing on <App />', () => {
  afterEach(cleanup);

  it('should show 404 page when the user goes to a non-listed route', () => {
    renderWithAll(<App />, { initialEntries: ['/naoexiste'] });

    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });

  it('should navigate to checkout page with an empty cart when user clicks the shopping cart icon', async () => {
    renderWithAll(<App />);

    const navlink = screen.getByTestId('button-cart');
    userEvent.click(navlink);

    await waitFor(() => {
      expect(screen.getByTestId('checkout-title')).toBeInTheDocument();
      expect(screen.getByText(/carrinho está vazio/i)).toBeInTheDocument();
    });
  });
});
