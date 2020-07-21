import React from 'react';
import PropTypes from "prop-types";

const withShowMore = (Component) => {
  class WithShowMore extends React.PureComponent {

    render() {
      return (
        <Component
          {...this.props}
          test ={[1,2,3]}
        />
      );
    }
  }

  return WithShowMore;
};

export default withShowMore;
