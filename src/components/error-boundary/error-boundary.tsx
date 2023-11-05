import './error-boundary.css';

import { Component, ErrorInfo } from 'react';

type MyProps = {
  children: React.ReactNode;
};
type MyState = {
  hasError: boolean;
};
export class ErrorBoundary extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <p className="error">Something went wrong.</p>;
    }

    return this.props.children;
  }
}
