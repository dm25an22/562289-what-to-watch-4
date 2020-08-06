import React from "react";
import {Link} from "react-router-dom";
import {APP_ROUTE} from "../../constans";

const captionStyle = {
  fontSize: `60px`
};

const linkStyle = {
  textDecoration: `none`,
  listStyle: `none`,
  color: `inherit`,
  fontSize: `25px`
};

const NotFoundMessage = () => {
  return (
    <React.Fragment>
      <h1 style={captionStyle}>Page not found 404</h1>
      <Link style={linkStyle} to={APP_ROUTE.ROOT}>Go to main page</Link>
    </React.Fragment>
  );
};

export default NotFoundMessage;
