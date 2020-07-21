import React from "react";
import GenresList from "../genres-list/genres-list.jsx";
import LoadMoreButton from "../load-more-button/load-more-button.jsx";
import MovieList from "../movie-list/movie-list.jsx";

const Catalog = ({filmsByFilter, onSmallCardClick, changeState}) => {
  return (
    <section className="catalog">
      <GenresList />

      <MovieList
        filmsByFilter={filmsByFilter}
        onSmallCardClick={onSmallCardClick}
      />

      <LoadMoreButton
        changeState={changeState}
      />
    </section>
  );
};

export default Catalog;
