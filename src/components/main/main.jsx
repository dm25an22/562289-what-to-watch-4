import React from "react";
import PropTypes from "prop-types";
import MovieList from "../movie-list/movie-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import Promo from "../promo/promo.jsx";
import PageContent from "../page-content/page-content.jsx";
import LoadMoreButton from "../load-more-button/load-more-button.jsx";
import withFilterByGenre from "../../hocks/with-filter-by-genre/with-filter-by-genre";

const MovieListWrraped = withFilterByGenre(MovieList);

const Main = ({onSmallCardClick, promoFilm}) => {
  return (
    <>
    <Promo promoFilm={promoFilm} />

    <PageContent>

      <GenresList />

      <MovieListWrraped
        onSmallCardClick={onSmallCardClick}
      />

      <LoadMoreButton />
    </PageContent>
  </>
  );
};

Main.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};

export default Main;
