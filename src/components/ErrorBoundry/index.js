import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.log('caught error in ', this.props.children);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError, children } = this.props;

    if (hasError) {
      return <div>Something went wrong.</div>;
    }

    return children;
  }
}
