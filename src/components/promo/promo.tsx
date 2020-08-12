import * as React from "react";
import HeaderMovie from "../header/header-movie";
import MovieCardDescription from "../movie-card-description/movie-card-description";
import {filmType} from "../../types";

interface Props {
  film: filmType
}

const Promo: React.FC<Props> = ({film}) => {
  const {
    bigPoster,
    moviePoster
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

export default Promo;
