import React from "react";
import PropTypes from "prop-types";
import {AppRoute} from "../../consts.js";
import {history} from "../../history.js";
import {AuthorizationStatus} from "../../reducer/user/user";
import HeaderMovie from "../header/header-movie.jsx";


const Promo = ({film, authStatus, onMyListBtnClick, status}) => {
  const {
    bigPoster,
    moviePoster,
    title,
    genre,
    year,
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

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"/>
                </svg>
                <span>Play</span>
              </button>
              <button
                onClick={() => {
                  if (authStatus === AuthorizationStatus.NO_AUTH) {
                    history.push(AppRoute.LOGIN);
                  } else {
                    onMyListBtnClick(film, status);
                  }
                }}
                className="btn btn--list movie-card__button" type="button">

                {status ?
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  :
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list" />
                  </svg>}

                <span>My list</span>
              </button>
            </div>
          </div>
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
