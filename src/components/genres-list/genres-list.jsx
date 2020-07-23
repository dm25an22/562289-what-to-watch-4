import React from "react";
import PropTypes from "prop-types";
import Genre from "../genre/genre.jsx";

const GenresList = ({onGenreClick, currentGenre, genres}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((it) => <Genre
        key={it}
        active={it === currentGenre}
        onGenreClick={onGenreClick}
        genre={it} />)}
    </ul>
  );
};

GenresList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default GenresList;
