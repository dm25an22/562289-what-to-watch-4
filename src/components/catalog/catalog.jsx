import React from "react";
import GenresList from "../genres-list/genres-list.jsx";
import LoadMoreButton from "../load-more-button/load-more-button.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import { connect } from "react-redux";
import {getUniqueGeners} from "../../reducer/data/selectors";
import {getCurrentGenre} from "../../reducer/app-state/selectors";
import {ActionCreator} from "../../reducer/app-state/app-state";

const Catalog = ({filmsByFilter, onSmallCardClick, changeState, allFilmsCount, genres, currentGenre, onGenreClick}) => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList
        genres={genres}
        currentGenre={currentGenre}
        onGenreClick={onGenreClick}
      />

      <MovieList
        filmsByFilter={filmsByFilter}
        onSmallCardClick={onSmallCardClick}
      />

      {filmsByFilter.length < allFilmsCount && <LoadMoreButton
        changeState={changeState}
      />}
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    genres: getUniqueGeners(state),
    currentGenre: getCurrentGenre(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreClick(genre) {
      dispatch(ActionCreator.currentGenre(genre));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
