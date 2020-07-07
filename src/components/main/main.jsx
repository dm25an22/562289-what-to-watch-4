import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import Promo from "../promo/promo.jsx";
import Footer from "../footer/footer.jsx";
import LoadMoreButton from "../load-more-button/load-more-button.jsx";

const Main = ({promo, onSmallCardClick, films, currentGenre, onGenreClick}) => {
  return (
    <>
    <Promo promo={promo} />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList
          currentGenre={currentGenre}
          films={films}
          onGenreClick={onGenreClick}
        />

        <MovieList
          currentGenre={currentGenre}
          films={films}
          onSmallCardClick={onSmallCardClick}
        />

        <LoadMoreButton />
      </section>

      <Footer />
    </div>
  </>
  );
};

Main.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  promo: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};

export default Main;
