// ErrorBoundary.jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Une erreur est survenue :', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops, une erreur est survenue !</h1>
          <p>Veuillez réessayer plus tard.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;