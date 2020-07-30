import React from 'react';
import PropTypes from "prop-types";
import {getFilmsByGener} from '../../utils';

const MAX_FILIMS_IN_SIMILAR = 4;

const withSimilarFilms = (Component) => {
  class WithSimilarFilms extends React.PureComponent {

    _getUniqueList() {
      const {films, genre} = this.props;

      const filmsByGenre = getFilmsByGener(films, genre);
      const filmsByGenreCopy = [...filmsByGenre];
      const filmIndex = filmsByGenreCopy.findIndex((it) => it.id === this.props.id);

      filmsByGenreCopy.splice(filmIndex, 1);
      return filmsByGenreCopy.slice(0, MAX_FILIMS_IN_SIMILAR);
    }

    render() {
      return (
        <Component
          {...this.props}
          filmsByFilter={this._getUniqueList()}
        />
      );
    }
  }

  WithSimilarFilms.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
    genre: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };

  return WithSimilarFilms;
};

export default withSimilarFilms;
