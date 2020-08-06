import React from "react";
import PropTypes from "prop-types";
import MovieNav from "../movie-nav/movie-nav.jsx";

const MovieCardInfo = ({film, renderCurrentInfo, currentTab, onClickTab}) => {
  return (
    <div className="movie-card__desc">
      <MovieNav
        currentTab={currentTab}
        onClickTab={onClickTab}
      />
      {renderCurrentInfo(film)}

    </div>
  );
};

MovieCardInfo.propTypes = {
  film: PropTypes.PropTypes.object.isRequired,
  renderCurrentInfo: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
  onClickTab: PropTypes.func.isRequired,
};

export default MovieCardInfo;
