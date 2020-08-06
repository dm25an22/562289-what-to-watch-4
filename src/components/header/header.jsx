import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthStatus, getUserData} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {APP_ROUTE} from "../../constans";
import {history} from "../../history";
import Logo from "../logo/logo.jsx";


const getMarkupByStatus = (authStatus, userData) => {
  if (authStatus === AuthorizationStatus.AUTH) {
    return (
      <div onClick={() => {
        history.push(APP_ROUTE.MY_LIST);
      }}
      className="user-block__avatar">
        <img src={userData.avatarUrl !== null ? `https://htmlacademy-react-3.appspot.com${userData.avatarUrl}` : ``} alt="User avatar" width="63" height="63" />
      </div>
    );
  } else {
    return (
      <Link to={APP_ROUTE.LOGIN} className="user-block__link">Sign in</Link>
    );
  }
};

const Header = ({className, authStatus, children, userData}) => {
  return (
    <header className={`page-header ${className}`}>
      <Logo />
      {children}
      <div className="user-block">
        {getMarkupByStatus(authStatus, userData)}
      </div>

    </header>
  );
};

Header.propTypes = {
  authStatus: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  userData: PropTypes.any
};

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state),
    userData: getUserData(state)
  };
};


export default connect(mapStateToProps)(Header);


