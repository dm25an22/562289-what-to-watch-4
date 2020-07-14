import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoPlayer from "../../hocks/with-video-player/with-video-player";
import {getFilmsByFilter} from "../../reducer/data/selectors";
import {connect} from "react-redux";

const MovieCard = withVideoPlayer(SmallMovieCard);

const MovieList = ({onSmallCardClick, filmsByFilter}) => {
  return (
    <div className="catalog__movies-list">
      {filmsByFilter.map((film, i) => {
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
  onSmallCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    filmsByFilter: getFilmsByFilter(state)
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
