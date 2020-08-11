import * as React from 'react';
import {getFilmsByGener} from '../../utils';
import {Subtract} from 'utility-types';
import {filmType} from '../../types';

const MAX_FILIMS_IN_SIMILAR = 4;


interface InjectingProps {
  filmsByFilter: filmType[]
}

const withSimilarFilms = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithSimilarFilms extends React.PureComponent<T> {

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

  return WithSimilarFilms;
};

export default withSimilarFilms;
