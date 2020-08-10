import * as React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../enum";

const captionStyle: React.CSSProperties = {
  fontSize: `60px`
};

const linkStyle: React.CSSProperties = {
  textDecoration: `none`,
  listStyle: `none`,
  color: `inherit`,
  fontSize: `25px`
};

const NotFoundMessage: React.FC = () => {
  return (
    <React.Fragment>
      <h1 style={captionStyle}>Page not found 404</h1>
      <Link style={linkStyle} to={AppRoute.ROOT}>Go to main page</Link>
    </React.Fragment>
  );
};

export default NotFoundMessage;
