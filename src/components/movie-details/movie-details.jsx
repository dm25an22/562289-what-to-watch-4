import React from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import MovieCardFull from "../movie-card-full/movie-card-full.jsx";
import withCurrentTab from "../../hocks/with-current-tab/with-current-tab";

const MovieCardFullWrraped = withCurrentTab(MovieCardFull);

const MovieDetails = ({film, onSmallCardClick}) => {
  return (
    <React.Fragment>

      <MovieCardFullWrraped key={film.id} film={film}/>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MovieList
            onSmallCardClick={onSmallCardClick}
            similar={true}
            currentFilmId={film.id}
          />

        </section>

        <Footer />
      </div>
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
