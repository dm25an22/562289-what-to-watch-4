import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {filterByGenre} from "../../utils";
import withVideoPlayer from "../../hocks/with-video-player/with-video-player";

const MovieCard = withVideoPlayer(SmallMovieCard);

const MovieList = ({films, onSmallCardClick, currentGenre}) => {
  const filmsByGenre = filterByGenre(films, currentGenre);
  return (
    <div className="catalog__movies-list">
      {filmsByGenre.map((film, i) => {
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
  currentGenre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};

export default MovieList;
