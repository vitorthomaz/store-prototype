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
          <h2>Algo deu errado :(</h2>
          <span>Veja o console para mais informações</span>
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
