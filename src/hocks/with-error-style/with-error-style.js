import React from "react";

const DELAY = 1700;
const ERROR_STYLE = {
  NONE: `none`,
  RED_BORDER: `1px solid red`
};

const withErrorStyle = (Component) => {
  class WithErrorStyle extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        errorStyle: `none`
      };

      this.showErrorStyle = this.showErrorStyle.bind(this);
      this.hideErrorStyle = this.hideErrorStyle.bind(this);
    }

    showErrorStyle() {
      this.setState({
        errorStyle: ERROR_STYLE.RED_BORDER
      });
    }

    hideErrorStyle() {
      setTimeout(() => {
        this.setState({
          errorStyle: ERROR_STYLE.NONE
        });
      }, DELAY);
    }

    render() {
      return (
        <Component
          {...this.props}
          showErrorStyle={this.showErrorStyle}
          hideErrorStyle={this.hideErrorStyle}
          errorStyle={this.state.errorStyle}
        />
      );
    }
  }

  return WithErrorStyle;
};

export default withErrorStyle;
