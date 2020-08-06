import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthStatus} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import {APP_ROUTE} from "../../constans";

const PrivateRoute = ({exact, path, authStatus, render}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return (
          AuthorizationStatus.AUTH === authStatus
            ? render(props)
            : <Redirect to={APP_ROUTE.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  authStatus: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
