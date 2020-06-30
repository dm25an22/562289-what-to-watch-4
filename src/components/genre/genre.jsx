import React from "react";
import PropsTypes from "prop-types";


const Genre = ({genre, onGenreClick, films, index, setCurrentGenre, active}) => {
  const className = `catalog__genres-item ${active && `catalog__genres-item--active`}`;

  return (
    <li className={className}>
      <a
        onClick={(evt) => {
          evt.preventDefault();
          setCurrentGenre(index);
          onGenreClick(films, genre);
        }}
        href="#"
        className="catalog__genres-link">{genre}</a>
    </li>
  );
};

Genre.propTypes = {
  genre: PropsTypes.string.isRequired,
  onGenreClick: PropsTypes.func.isRequired,
  films: PropsTypes.arrayOf(PropsTypes.object.isRequired).isRequired,
  index: PropsTypes.number.isRequired,
  setCurrentGenre: PropsTypes.func.isRequired,
  active: PropsTypes.bool.isRequired
};

export default Genre;
