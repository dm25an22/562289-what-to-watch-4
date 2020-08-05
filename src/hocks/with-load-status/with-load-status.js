import React from "react";

const withLoadStatus = (Component) => {
  class WithLoadStatus extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        isLoaded: false,
        errorCode: null
      };

      this.onError = this.onError.bind(this);
      this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess() {
      this.setState({
        isLoading: false,
        isLoaded: true
      });
    }

    onError(errCode) {
      this.setState({
        isLoading: false,
        isLoaded: false,
        errorCode: errCode
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onSuccess={this.onSuccess}
          onError={this.onError}
          isLoaded={this.state.isLoaded}
          errorCode={this.state.errorCode}
          isLoading={this.state.isLoading}
        />
      );
    }
  }

  return WithLoadStatus;
};

export default withLoadStatus;
