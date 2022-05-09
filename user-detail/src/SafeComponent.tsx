import React from "react";

export default class SafeComponent extends React.Component {
  state: any = {
    hasError: false,
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? "Something Went Wrong" : this.props.children;
  }
}
