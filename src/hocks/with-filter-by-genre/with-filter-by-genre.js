import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getFilmsByFilter} from "../../reducer/data/selectors";


const withFilterByGenre = (Component) => {
  class WithFilterByGenre extends React.PureComponent {

    render() {
      const {filmsByFilter} = this.props;
      return (
        <Component
          {...this.props}
          films={filmsByFilter}
        />
      );
    }
  }

  WithFilterByGenre.propTypes = {
    filmsByFilter: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  const mapStateToProps = (state) => {
    return {
      filmsByFilter: getFilmsByFilter(state),
    };
  };

  return connect(mapStateToProps)(WithFilterByGenre);
};

export default withFilterByGenre;
