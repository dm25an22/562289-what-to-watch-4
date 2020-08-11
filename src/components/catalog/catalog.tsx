import * as React from "react";
import GenresList from "../genres-list/genres-list";
import MovieList from "../movie-list/movie-list";
import withShowMore from "../../hocks/with-show-more/with-show-more";
import {filmType} from "../../types";

const MovieListWrraped = withShowMore(MovieList);

interface Props {
  films: filmType[],
  currentGenre: string,
  onGenreClick: () => void,
  genres: string[]
}

const Catalog: React.FC<Props> = (props: Props) => {
  const {
    currentGenre,
    onGenreClick,
    genres,
    films
  } = props;

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList
        currentGenre={currentGenre}
        onGenreClick={onGenreClick}
        genres={genres}
      />

      <MovieListWrraped
        films={films}
        key={currentGenre}
        genre={currentGenre}
      />
    </section>
  );
};

export default Catalog;
