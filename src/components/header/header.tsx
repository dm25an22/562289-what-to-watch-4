import * as React from "react";
import {connect} from "react-redux";
import {getAuthStatus, getUserData} from "../../reducer/user/selectors";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Link} from "react-router-dom";
import {AppRoute} from "../../enum";
import {history} from "../../history";
import Logo from "../logo/logo";
import {userDataType} from "../../types";

interface Props {
  authStatus: string,
  className: string
  children?: React.ReactNode
  userData: userDataType
}

const getMarkupByStatus = (authStatus: string, userData: userDataType) => {
  if (authStatus === AuthorizationStatus.AUTH) {
    return (
      <div onClick={() => {
        history.push(AppRoute.MY_LIST);
      }}
      className="user-block__avatar">
        <img src={userData.avatarUrl !== null ? `https://htmlacademy-react-3.appspot.com${userData.avatarUrl}` : ``} alt="User avatar" width="63" height="63" />
      </div>
    );
  } else {
    return (
      <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>
    );
  }
};

const Header: React.FC<Props> = (props: Props) => {
  const {
    className,
    authStatus,
    children,
    userData
  } = props;

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

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state),
    userData: getUserData(state)
  };
};


export default connect(mapStateToProps)(Header);


