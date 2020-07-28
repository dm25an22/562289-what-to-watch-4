import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthStatus} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";
import {history} from "../../history";
import Logo from "../logo/logo.jsx";


const getMarkupByStatus = (authStatus) => {
  if (authStatus === AuthorizationStatus.AUTH) {
    return (
      <div onClick={() => {
        history.push(AppRoute.MY_LIST);
      }}
      className="user-block__avatar">
        <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
      </div>
    );
  } else {
    return (
      <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
    );
  }
};

const Header = ({className, authStatus, children}) => {
  return (
    <header className={`page-header ${className}`}>
      <Logo />
      {children}
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


