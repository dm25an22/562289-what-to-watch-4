import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoPlayer from "../../hocks/with-video-player/with-video-player";
import {getFilmsByFilter} from "../../reducer/data/selectors";
import {connect} from "react-redux";

const MovieCard = withVideoPlayer(SmallMovieCard);

const MovieList = ({onSmallCardClick, filmsByFilter, similar = false}) => {

  let films = filmsByFilter;

  if (similar) {
    films = filmsByFilter.slice(0, 4);
  }

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => {
        return (
          <MovieCard
            key={film.title + i}
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
  similar: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    filmsByFilter: getFilmsByFilter(state),
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
