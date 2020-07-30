import React from "react";
import PropTypes from "prop-types";
import GenresList from "../genres-list/genres-list.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import withShowMore from "../../hocks/with-show-more/with-show-more.js";

const MovieListWrraped = withShowMore(MovieList);

const Catalog = ({currentGenre, onGenreClick, genres}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList
        currentGenre={currentGenre}
        onGenreClick={onGenreClick}
        genres={genres}
      />

      <MovieListWrraped
        key={currentGenre}
        genre={currentGenre}
      />
    </section>
  );
};

Catalog.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Catalog;
