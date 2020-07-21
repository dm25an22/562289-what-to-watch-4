import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoPlayer from "../../hocks/with-video-player/with-video-player";

const SmallMovieCardWrraped = withVideoPlayer(SmallMovieCard);

const MovieList = ({onSmallCardClick, filmsByFilter}) => {
  return (
    <div className="catalog__movies-list">
      {filmsByFilter.map((film, i) => {
        return (
          <SmallMovieCardWrraped
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
  onSmallCardClick: PropTypes.func.isRequired,
  filmsByFilter: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default MovieList;
