import * as React from "react";
import MovieCardInfo from "../movie-card-info/movie-card-info";
import withCurrentTab from "../../hocks/with-current-tab/with-current-tab";
import HeaderMovie from "../header/header-movie";
import MovieCardDescription from "../movie-card-description/movie-card-description";
import ButtonAddReview from "../buttons/button-add-review/button-add-review";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {filmType} from "../../types";

const MovieCardInfoWrraped = withCurrentTab(MovieCardInfo);

interface Props {
  film: filmType
  authStatus: string
}

const MovieCardFull: React.FC<Props> = (props: Props) => {
  const {
    film,
    authStatus,
    film: {
      title,
      bigPoster,
      moviePoster,
      backgroundColor,
    }
  } = props;

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
            {authStatus === AuthorizationStatus.AUTH && <ButtonAddReview id={film.id} />}
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

export default MovieCardFull;
