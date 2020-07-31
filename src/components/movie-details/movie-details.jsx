import React from "react";
import PropTypes from "prop-types";
import PageContent from "../page-content/page-content.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import MovieCardFull from "../movie-card-full/movie-card-full.jsx";
import withSimilarFilms from "../../hocks/with-similar-films/with-similar-films";

const MovieListWrraped = withSimilarFilms(MovieList);

const MovieDetails = ({film, films, authStatus}) => {
  scrollTo(0, 0);

  return (
    <React.Fragment>
      <MovieCardFull film={film} authStatus={authStatus}/>
      <PageContent>
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieListWrraped
            films={films}
            id={film.id}
            genre={film.genre}
          />
        </section>
      </PageContent>
    </React.Fragment>
  );
};

MovieDetails.propTypes = {
  film: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  authStatus: PropTypes.string.isRequired
};

export default MovieDetails;
