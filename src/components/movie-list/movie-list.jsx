import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideoPlayer from "../../hocks/with-video-player/with-video-player";
import {getFilmsByFilter} from "../../reducer/data/selectors";
import {connect} from "react-redux";

const SmallMovieCardWrraped = withVideoPlayer(SmallMovieCard);

const MovieList = ({onSmallCardClick, films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => {
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
  films: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = (state) => {
  return {
    filmsByFilter: getFilmsByFilter(state),
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
