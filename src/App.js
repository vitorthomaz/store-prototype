import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ path, Component, description }) => (
          <Route exact path={path} key={description}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
};

export default App;
