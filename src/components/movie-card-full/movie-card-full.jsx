import React from "react";
import PropTypes from "prop-types";
import MovieCardInfo from "../movie-card-info/movie-card-info.jsx";
import withCurrentTab from "../../hocks/with-current-tab/with-current-tab";
import HeaderMovie from "../header/header-movie.jsx";
import MovieCardDescription from "../movie-card-description/movie-card-description.jsx";
import ButtonAddReview from "../buttons/button-add-review/button-add-review.jsx";

const MovieCardInfoWrraped = withCurrentTab(MovieCardInfo);

const MovieCardFull = ({film}) => {
  const {
    title,
    bigPoster,
    moviePoster,
    backgroundColor,
  } = film;

  return (
    <section style={{background: backgroundColor}} className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={bigPoster} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <HeaderMovie />

        <div className="movie-card__wrap">
          <MovieCardDescription film={film}>
            <ButtonAddReview />
          </MovieCardDescription>
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={moviePoster} alt={`${title} poster`} width="218" height="327" />
          </div>

          <MovieCardInfoWrraped
            key={film.id}
            film={film}
          />

        </div>
      </div>
    </section>
  );
};

MovieCardFull.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    bigPoster: PropTypes.string.isRequired,
    moviePoster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    listActors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    backgroundColor: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }).isRequired,
  onMyListBtnClick: PropTypes.func.isRequired
};

export default MovieCardFull;
