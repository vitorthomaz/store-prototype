import React from 'react';
import {
  screen,
  cleanup,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithAll } from '../../utils/testing-wrapper';

import { productList } from './index.mock';

import { getProducts } from '../../services/products';
jest.mock('../../services/products');

import { PRODUCT_EMPTY } from '../../constants/services';

import Products from './';

describe('Testing functionalities of <Products /> without pocId', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should display no products without a valid pocId', async () => {
    getProducts.mockResolvedValueOnce(PRODUCT_EMPTY);
    renderWithAll(<Products />);

    await waitForElementToBeRemoved(screen.getByTestId('loading'));

    expect(screen.getByTestId('no-product')).toBeInTheDocument();
  });
});

describe('Testing functionalities of <Products /> with valid pocId', () => {
  beforeEach(() => {
    getProducts.mockResolvedValueOnce({ products: productList });
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('should display the cards with products and an empty shopping cart', async () => {
    renderWithAll(<Products />);
    await waitForElementToBeRemoved(screen.getByTestId('loading'));

    expect(screen.getByTestId('shopping-cart')).toHaveTextContent(0);
    expect(screen.getByTestId('grid')).toBeInTheDocument();
    expect(screen.getByTestId(`card-${productList[0].id}`)).toBeInTheDocument();
    expect(screen.getByTestId(`card-${productList[1].id}`)).toBeInTheDocument();
    expect(screen.getByTestId(`card-${productList[2].id}`)).toBeInTheDocument();
  });

  it('should add a product to shopping cart when user add any product', async () => {
    renderWithAll(<Products />);
    await waitForElementToBeRemoved(screen.getByTestId('loading'));

    const button = screen.getByTestId(`card-${productList[1].id}-add`);
    userEvent.click(button);

    await waitFor(() =>
      expect(screen.getByTestId('shopping-cart')).toHaveTextContent(1)
    );
  });

  it('should add only unique products to shopping cart when user adds different products', async () => {
    renderWithAll(<Products />);
    await waitForElementToBeRemoved(screen.getByTestId('loading'));

    const button1 = screen.getByTestId(`card-${productList[0].id}-add`);
    const button2 = screen.getByTestId(`card-${productList[1].id}-add`);
    const button3 = screen.getByTestId(`card-${productList[2].id}-add`);

    for (let i = 0; i <= 2; i++) {
      userEvent.click(button1);
      userEvent.click(button2);
      userEvent.click(button3);
    }

    userEvent.click(button2);

    await waitFor(() =>
      expect(screen.getByTestId('shopping-cart')).toHaveTextContent(3)
    );
  });

  it('should increment the respective product counter when user adds any product', async () => {
    renderWithAll(<Products />);
    await waitForElementToBeRemoved(screen.getByTestId('loading'));

    const button1 = screen.getByTestId(`card-${productList[0].id}-add`);
    const button2 = screen.getByTestId(`card-${productList[1].id}-add`);

    userEvent.click(button1);
    userEvent.click(button2);
    userEvent.click(button2);

    await waitFor(() => {
      const counter1 = screen.getByTestId(`card-${productList[0].id}-counter`);
      const counter2 = screen.getByTestId(`card-${productList[1].id}-counter`);

      expect(counter1).toHaveTextContent(1);
      expect(counter2).toHaveTextContent(2);
    });
  });

  it('should have an empty shopping cart and no product unit when user adds and removes the same product', async () => {
    renderWithAll(<Products />);
    await waitForElementToBeRemoved(screen.getByTestId('loading'));

    const id = productList[2].id;

    const add = screen.getByTestId(`card-${id}-add`);
    const remove = screen.getByTestId(`card-${id}-remove`);

    userEvent.click(add);
    userEvent.click(remove);

    await waitFor(() => {
      const cart = screen.getByTestId('shopping-cart');
      const counter = screen.getByTestId(`card-${id}-counter`);

      expect(cart).toHaveTextContent(0);
      expect(counter).toHaveTextContent(0);
    });
  });

  it('should have an empty shopping cart when user removes a product without adding one before', async () => {
    renderWithAll(<Products />);

    await waitForElementToBeRemoved(screen.getByTestId('loading'));

    const id = productList[1].id;
    const remove = screen.getByTestId(`card-${id}-remove`);

    userEvent.click(remove);

    await waitFor(() => {
      expect(screen.getByTestId('shopping-cart')).toHaveTextContent(0);
      expect(screen.getByTestId(`card-${id}-counter`)).toHaveTextContent(0);
    });
  });

  it('should have one product in shopping cart with one unit when user adds two different products and removes the first one', async () => {
    renderWithAll(<Products />);

    await waitForElementToBeRemoved(screen.getByTestId('loading'));

    const id1 = productList[0].id;
    const id3 = productList[2].id;
    const add1 = screen.getByTestId(`card-${id1}-add`);
    const remove1 = screen.getByTestId(`card-${id1}-remove`);
    const add3 = screen.getByTestId(`card-${id3}-add`);

    userEvent.click(add1);
    userEvent.click(add3);
    userEvent.click(remove1);

    await waitFor(() => {
      expect(screen.getByTestId('shopping-cart')).toHaveTextContent(1);
      expect(screen.getByTestId(`card-${id1}-counter`)).toHaveTextContent(0);
      expect(screen.getByTestId(`card-${id3}-counter`)).toHaveTextContent(1);
    });
  });
});
