import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getFilmsByFilter} from "../../reducer/data/selectors";
import {getCurrentFilm} from "../../reducer/app-state/selectors";

const MAX_FILIMS_IN_SIMILAR = 4;


const withSimilarFilms = (Component) => {
  class WithSimilarFilms extends React.PureComponent {

    _getSimilarFilms(filmsByFilter) {
      const filmsByFilterCopy = [...filmsByFilter];
      const filmIndex = filmsByFilterCopy.findIndex((it) => it.id === this.props.currentFilm);

      filmsByFilterCopy.splice(filmIndex, 1);
      return filmsByFilterCopy.slice(0, MAX_FILIMS_IN_SIMILAR);
    }

    render() {
      const {filmsByFilter} = this.props;
      return (
        <Component
          {...this.props}
          films={this._getSimilarFilms(filmsByFilter)}
        />
      );
    }
  }

  WithSimilarFilms.propTypes = {
    currentFilm: PropTypes.number.isRequired,
    filmsByFilter: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  const mapStateToProps = (state) => {
    return {
      filmsByFilter: getFilmsByFilter(state),
      currentFilm: getCurrentFilm(state)
    };
  };

  return connect(mapStateToProps)(WithSimilarFilms);
};

export default withSimilarFilms;
