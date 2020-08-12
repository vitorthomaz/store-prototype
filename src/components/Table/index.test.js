import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Table from './';

const data = [{ title: 'produto 1', price: 849.84, amount: 8, total: '12.00' }];

describe('Testing functionalities on <Checkout />', () => {
  beforeEach(cleanup);

  it('should display the products that the user has added to shopping cart', async () => {
    render(<Table data={data} />);

    expect(screen.getByTestId('shopping-cart-products')).toBeInTheDocument();
  });
});
