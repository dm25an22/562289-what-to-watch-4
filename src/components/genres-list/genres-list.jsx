import React from "react";
import PropTypes from "prop-types";
import Genre from "../genre/genre.jsx";
import {getUniqueGenres} from "../../utils";

const GenresList = ({onGenreClick, films, currentGenre}) => {
  const genres = getUniqueGenres(films);

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
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default GenresList;
