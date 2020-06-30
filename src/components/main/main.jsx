import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import Promo from "../promo/promo.jsx";


const Main = ({promo, onSmallCardClick, films, genres, onGenreClick}) => {
  return (
    <>
    <Promo promo={promo} />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList
          films={films}
          onGenreClick={onGenreClick}
          genres={genres}
        />

        <MovieList
          films={films}
          onSmallCardClick={onSmallCardClick}
        />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>
  );
};

Main.propTypes = {
  onGenreClick: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  promo: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};

export default Main;
