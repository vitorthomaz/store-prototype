import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

import path from './constants/paths';

const AppRoutes = () => {
  return (
    <Container>
      <Switch>
        {routes.map(({ path, Component, description }) => (
          <Route exact path={path} key={description}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Container>
  );
};

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
  }
];

const Container = styled.div`
  background: ${props => props.theme.colors.white};

  padding: ${props => props.theme.spacing.padding.page};
`;

export default AppRoutes;
