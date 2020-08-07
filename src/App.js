import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Footer } from './components';
import Routes from './routes';

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes />
        <Footer />
      </Container>
    </Router>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
