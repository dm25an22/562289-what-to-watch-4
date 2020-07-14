import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import Promo from "../promo/promo.jsx";
import Footer from "../footer/footer.jsx";
import LoadMoreButton from "../load-more-button/load-more-button.jsx";

const Main = ({onSmallCardClick, promoFilm}) => {
  return (
    <>
    <Promo promoFilm={promoFilm} />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenresList />

        <MovieList
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
  promoFilm: PropTypes.object.isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};

export default Main;
