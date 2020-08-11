import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Checkout from './pages/Checkout';

import path from './constants/paths';

const routes = [
  {
    description: 'Home page',
    path: path.HOME,
    Component: Home
  },
  {
    description: 'Product list',
    path: path.PRODUCTS,
    Component: Products
  },
  {
    description: 'About page',
    path: path.ABOUT,
    Component: About
  },
  {
    description: 'Shopping cart page',
    path: path.CHECKOUT,
    Component: Checkout
  }
];

export default routes;
