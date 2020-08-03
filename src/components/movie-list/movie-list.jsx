import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withSmallVideoPlayer from "../../hocks/with-small-video-player/with-small-video-player";

const SmallMovieCardWrraped = withSmallVideoPlayer(SmallMovieCard);

const MovieList = ({filmsByFilter, children}) => {
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {filmsByFilter.map((film) => {
          return (
            <SmallMovieCardWrraped
              key={film.title}
              film={film}
            />
          );
        })}
      </div>

      {children}

    </React.Fragment>
  );
};

MovieList.propTypes = {
  filmsByFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.node,
};

export default MovieList;
