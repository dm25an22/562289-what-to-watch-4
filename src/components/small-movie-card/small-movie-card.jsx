import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = ({films, onCardMouseOver, onSmallCardClick}) => {
  return (
    films.map((film, index) => (
      <article
        key={film.title + index}
        onMouseOver={() => {
          onCardMouseOver(index);
        }}
        className="small-movie-card catalog__movies-card">
        <div
          onClick={() => {
            onSmallCardClick(index);
          }}
          className="small-movie-card__image">
          <img src={film.smallCardImg} alt={film.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            onClick={(evt) => {
              evt.preventDefault();
              onSmallCardClick(index);
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
    smallCardImg: PropTypes.string.isRequired
  })).isRequired,
  onCardMouseOver: PropTypes.func.isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};

export default SmallMovieCard;
