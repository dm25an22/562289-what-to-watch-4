import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoPlayer from "../../hocks/with-video-player/with-video-player";
import {getFilmsByFilter} from "../../reducer/data/selectors";
import {connect} from "react-redux";

const MAX_FILIMS_IN_SIMILAR = 4;
const MovieCard = withVideoPlayer(SmallMovieCard);

const MovieList = ({onSmallCardClick, filmsByFilter, similar = false, currentFilmId = null}) => {

  let films = filmsByFilter;

  if (similar) {
    const filmsByFilterCopy = [...filmsByFilter];
    const filmIndex = filmsByFilterCopy.findIndex((it) => it.id === currentFilmId);

    filmsByFilterCopy.splice(filmIndex, 1);
    films = filmsByFilterCopy.slice(0, MAX_FILIMS_IN_SIMILAR);
  }

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => {
        return (
          <MovieCard
            key={film.title}
            film={film}
            index={i}
            onSmallCardClick={onSmallCardClick}
          />
        );
      })}
    </div>
  );

};

MovieList.propTypes = {
  filmsByFilter: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSmallCardClick: PropTypes.func.isRequired,
  similar: PropTypes.bool,
  currentFilmId: PropTypes.number
};

const mapStateToProps = (state) => {
  return {
    filmsByFilter: getFilmsByFilter(state),
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
