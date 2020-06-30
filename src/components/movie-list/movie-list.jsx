import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {connect} from "react-redux";

const MovieList = (props) => {
  const {films, onSmallCardClick, filmsByGenre} = props;
  return (
    <div className="catalog__movies-list">
      {filmsByGenre.map((film, i) => {
        return (
          <SmallMovieCard
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
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    filmsByGenre: state.filmsByGenre
  };
};

export {MovieList};
export default connect(mapStateToProps)(MovieList);
