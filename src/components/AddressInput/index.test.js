import React from 'react';
import userEvent from '@testing-library/user-event';
import {
  render,
  screen,
  cleanup,
  waitFor
} from '../../utils/testing-redux-wrapper';

import AddressInput from './';
import { GEO_EMPTY, POC_EMPTY } from '../../constants/services';
import { INPUT_EMPTY } from '../../constants/components';

import { convertToGeo } from '../../services/geocoding';
import { getPocId } from '../../services/poc';

jest.mock('../../services/geocoding');
jest.mock('../../services/poc');

import {
  changePage,
  gibberish,
  geoInvalidAddress,
  anywhereAddress,
  geoFromAnywhere,
  geoFromPoc,
  pocAddress
} from './index.mocks';

describe('Testing functionalities of <AddressInput />', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('should render what the user types', () => {
    render(<AddressInput changePage={changePage} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, gibberish);

    expect(input).toHaveValue(gibberish);
  });

  it('should ask for input if user clicks button without any input value', () => {
    render(<AddressInput changePage={changePage} />);

    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(screen.getByText(INPUT_EMPTY)).toBeInTheDocument();
  });

  it('should warn user has entered an invalid address', async () => {
    convertToGeo.mockResolvedValueOnce(geoInvalidAddress);

    render(<AddressInput changePage={changePage} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, gibberish);
    userEvent.click(button);

    await waitFor(() =>
      expect(screen.getByText(GEO_EMPTY.error)).toBeInTheDocument()
    );
  });

  it('should warn user that the address does not have a distributor', async () => {
    convertToGeo.mockResolvedValueOnce(geoFromAnywhere);
    getPocId.mockResolvedValueOnce(POC_EMPTY);

    render(<AddressInput changePage={changePage} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, anywhereAddress);
    userEvent.click(button);

    await waitFor(() =>
      expect(screen.getByText(POC_EMPTY.error)).toBeInTheDocument()
    );
  });

  it('should change page when user enters the correct address', async () => {
    convertToGeo.mockResolvedValueOnce(geoFromPoc);
    getPocId.mockResolvedValueOnce({ id: '654' });

    render(<AddressInput changePage={changePage} />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    userEvent.type(input, pocAddress);
    userEvent.click(button);

    await waitFor(() => expect(changePage).toHaveBeenCalled());
  });
});
