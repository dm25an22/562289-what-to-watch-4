import React from "react";
import PropsTypes from "prop-types";


const Genre = ({genre, onGenreClick, active}) => {
  const className = `catalog__genres-item ${active && `catalog__genres-item--active`}`;

  return (
    <li className={className}>
      <a
        onClick={(evt) => {
          evt.preventDefault();
          onGenreClick(genre);
        }}
        href="#"
        className="catalog__genres-link">{genre}</a>
    </li>
  );
};

Genre.propTypes = {
  genre: PropsTypes.string.isRequired,
  onGenreClick: PropsTypes.func.isRequired,
  active: PropsTypes.bool.isRequired
};

export default Genre;
