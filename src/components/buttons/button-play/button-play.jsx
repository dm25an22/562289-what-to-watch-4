import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {APP_ROUTE} from "../../../constans";

const ButtonPlay = ({id}) => {
  return (
    <Link to={`${APP_ROUTE.PLAYER}/${id}`} className="btn btn--play movie-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </Link>
  );
};

ButtonPlay.propTypes = {
  id: PropTypes.number.isRequired
};

export default ButtonPlay;
