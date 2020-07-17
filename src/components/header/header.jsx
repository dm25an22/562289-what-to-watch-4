import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {ActionCreator} from "../../reducer/app-state/app-state";

const getMarkupByStatus = (authStatus, onSignInClick) => {
  if (authStatus === AuthorizationStatus.AUTH) {
    return (
      <div className="user-block__avatar">
        <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    );
  } else {
    return (
      <a onClick={(evt) => {
        evt.preventDefault();

        onSignInClick(true);
      }}
      href="sign-in.html" className="user-block__link">Sign in</a>
    );
  }
};

const Header = ({authStatus, onSignInClick}) => {
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a href="main.html" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        {getMarkupByStatus(authStatus, onSignInClick)}
      </div>

    </header>
  );
};

Header.propTypes = {
  authStatus: PropTypes.string.isRequired,
  onSignInClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignInClick(bool) {
      dispatch(ActionCreator.isSignIn(bool));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);


