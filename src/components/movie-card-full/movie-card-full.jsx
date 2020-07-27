import React from "react";
import PropTypes from "prop-types";
import Header from "../header/header.jsx";
import MovieCardInfo from "../movie-card-info/movie-card-info.jsx";
import withCurrentTab from "../../hocks/with-current-tab/with-current-tab";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";

const MovieCardInfoWrraped = withCurrentTab(MovieCardInfo);

const MovieCardFull = ({film, onMyListBtnClick}) => {
  const {
    title,
    bigPoster,
    moviePoster,
    genre,
    year,
    backgroundColor,
    isFavorite
  } = film;

  const status = isFavorite ? 0 : 1;

  return (
    <section style={{background: backgroundColor}} className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={bigPoster} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <button className="btn btn--play movie-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button onClick={() => {
                onMyListBtnClick(film, status);
              }}
              className="btn btn--list movie-card__button" type="button">
                {isFavorite ?
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list" />
                  </svg>
                  :
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>}
                <span>My list</span>
              </button>
              <a href="add-review.html" className="btn movie-card__button">Add review</a>
            </div>
          </div>
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


const mapDispatchToProps = (dispatch) => {
  return {
    onMyListBtnClick(film, status) {
      dispatch(DataOperation.toggleFavorite(film, status));
    }
  };
};

export default connect(null, mapDispatchToProps)(MovieCardFull);
