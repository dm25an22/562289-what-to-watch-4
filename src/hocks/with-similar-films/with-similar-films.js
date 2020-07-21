import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getSimilarFilms} from "../../reducer/data/selectors";

const withSimilarFilms = (Component) => {
  class WithSimilarFilms extends React.PureComponent {

    render() {
      const {filmsByFilter} = this.props;
      return (
        <Component
          {...this.props}
          filmsByFilter={filmsByFilter}
        />
      );
    }
  }

  WithSimilarFilms.propTypes = {
    filmsByFilter: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  const mapStateToProps = (state) => {
    return {
      filmsByFilter: getSimilarFilms(state),
    };
  };

  return connect(mapStateToProps)(WithSimilarFilms);
};

export default withSimilarFilms;
