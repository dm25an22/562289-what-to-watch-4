import * as React from "react";
import {Subtract} from "utility-types";

interface State {
  isLoading: boolean,
  isLoaded: boolean,
  errorCode: null | number
}

interface InjectingProps {
  onSuccess: () => void,
  onError:(errCode: number) => void,
  isLoaded: boolean,
  errorCode: null | number,
  isLoading: boolean
}

const withLoadStatus = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithLoadStatus extends React.PureComponent<T, State> {
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
