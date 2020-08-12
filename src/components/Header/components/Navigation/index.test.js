import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Navigation from './';

describe('Testing functionalities of <Navigation />', () => {
  afterEach(cleanup);

  it('should call page changing function when clicking a navigation link', async () => {
    const changePage = jest.fn();
    const data = [
      {
        description: 'Any page change',
        text: 'Trocar de pagina',
        action: changePage,
        key: 'trocar'
      }
    ];
    render(<Navigation data={data} />);

    const link = screen.getByText('Trocar de pagina');

    userEvent.click(link);

    await waitFor(() => expect(changePage).toHaveBeenCalled());
  });
});
