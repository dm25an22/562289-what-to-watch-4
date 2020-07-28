import React from "react";
import PropTypes from "prop-types";
import HeaderMovie from "../header/header-movie.jsx";
import MovieCardDescription from "../movie-card-description/movie-card-description.jsx";


const Promo = ({film}) => {
  const {
    bigPoster,
    moviePoster,
  } = film;

  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={bigPoster} alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <HeaderMovie />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={moviePoster} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
          <MovieCardDescription film={film} />
        </div>
      </div>
    </section>
  );
};

Promo.propTypes = {
  film: PropTypes.shape({
    bigPoster: PropTypes.string.isRequired,
    moviePoster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }).isRequired,
  onMyListBtnClick: PropTypes.func.isRequired
};

export default Promo;
