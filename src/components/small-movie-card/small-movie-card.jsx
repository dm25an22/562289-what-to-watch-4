import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = ({films, onCardMouseOver, onTitleClick}) => {
  return (
    films.map((film, index) => (
      <article
        key={film.title}
        onMouseOver={() => {
          onCardMouseOver(index);
        }}
        className="small-movie-card catalog__movies-card">

        <div className="small-movie-card__image">
          <img src={film.src} alt={film.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            onClick={(evt) => {
              evt.preventDefault();
              onTitleClick();
            }}
            className="small-movie-card__link"
            href="movie-page.html">{film.title}
          </a>
        </h3>
      </article>
    ))
  );
};

SmallMovieCard.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default SmallMovieCard;
