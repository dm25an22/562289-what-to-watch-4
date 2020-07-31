import React from "react";

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
        errorStyle: `1px solid red`
      });
    }

    hideErrorStyle() {
      setTimeout(() => {
        this.setState({
          errorStyle: `none`
        });
      }, 1700);
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
