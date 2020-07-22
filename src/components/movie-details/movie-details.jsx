import React from "react";
import PropTypes from "prop-types";
import PageContent from "../page-content/page-content.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import MovieCardFull from "../movie-card-full/movie-card-full.jsx";
import withSimilarFilms from "../../hocks/with-similar-films/with-similar-films";

const MovieListWrraped = withSimilarFilms(MovieList);

const MovieDetails = ({film, onSmallCardClick}) => {
  return (
    <React.Fragment>

      <MovieCardFull film={film}/>

      <PageContent>
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieListWrraped
            onSmallCardClick={onSmallCardClick}
          />
        </section>

      </PageContent>
    </React.Fragment>
  );
};

MovieDetails.propTypes = {
  onSmallCardClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
};

export default MovieDetails;
