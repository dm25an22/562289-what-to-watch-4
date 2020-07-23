import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoPlayer from "../../hocks/with-video-player/with-video-player";

const SmallMovieCardWrraped = withVideoPlayer(SmallMovieCard);

const MovieList = ({onSmallCardClick, filmsByFilter, children}) => {
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {filmsByFilter.map((film) => {
          return (
            <SmallMovieCardWrraped
              key={film.title}
              film={film}
              onSmallCardClick={onSmallCardClick}
            />
          );
        })}
      </div>

      {children}

    </React.Fragment>
  );
};

MovieList.propTypes = {
  onSmallCardClick: PropTypes.func.isRequired,
  filmsByFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node,
};

export default MovieList;
