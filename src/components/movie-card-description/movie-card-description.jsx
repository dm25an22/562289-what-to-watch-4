import React from "react";
import ButtonPlay from "../buttons/button-play/button-play.jsx";
import ButtonMyList from "../buttons/button-my-list/button-my-list.jsx";
import withFavorite from "../../hocks/with-favorite/with-favorite";

const ButtonMyListWrraped = withFavorite(ButtonMyList);

const MovieCardDescription = ({film, children}) => {
  const {
    title,
    genre,
    year,
  } = film;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{year}</span>
      </p>

      <div className="movie-card__buttons">
        <ButtonPlay />
        <ButtonMyListWrraped film={film} />
        {children}
      </div>
    </div>
  );
};

export default MovieCardDescription;
