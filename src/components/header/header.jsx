import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";

const getMarkupByStatus = (authStatus) => {
  if (authStatus === AuthorizationStatus.AUTH) {
    return (
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    );
  } else {
    return (
      <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
    );
  }
};

const Header = ({authStatus}) => {
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <Link to={AppRoute.ROOT} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="user-block">
        {getMarkupByStatus(authStatus)}
      </div>

    </header>
  );
};

Header.propTypes = {
  authStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state)
  };
};


export default connect(mapStateToProps)(Header);


