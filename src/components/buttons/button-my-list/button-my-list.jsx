import React from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../../reducer/user/user";
import {AppRoute} from "../../../consts";
import {history} from "../../../history";

const ButtonMyList = ({authStatus, onMyListBtnClick, film, status}) => {
  return (
    <button
      onClick={() => {
        if (authStatus === AuthorizationStatus.NO_AUTH) {
          history.push(AppRoute.LOGIN);
        } else {
          onMyListBtnClick(film, status);
        }
      }}
      className="btn btn--list movie-card__button" type="button">

      {status ?
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"/>
        </svg>
        :
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list" />
        </svg>}

      <span>My list</span>
    </button>
  );
};

ButtonMyList.propTypes = {
  authStatus: PropTypes.string.isRequired,
  onMyListBtnClick: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  status: PropTypes.number.isRequired
};

export default ButtonMyList;
