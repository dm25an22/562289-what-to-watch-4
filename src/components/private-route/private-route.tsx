import * as React from "react";
import {Route, Redirect, RouteComponentProps} from "react-router-dom";
import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthStatus} from "../../reducer/user/selectors";
import {connect} from "react-redux";
import {AppRoute} from "../../enum";

interface Props {
  exact: boolean,
  path: string,
  authStatus: string,
  render: (props: RouteComponentProps) => React.ReactNode
}

const PrivateRoute: React.FC<Props> = ({exact, path, authStatus, render}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        return (
          AuthorizationStatus.AUTH === authStatus
            ? render(props)
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
