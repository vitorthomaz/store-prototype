import React, { Component } from 'react';
import propTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Algo deu errado :(</p>
          <p>Veja o console para mais informações</p>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: propTypes.array.isRequired
};

export default ErrorBoundary;
