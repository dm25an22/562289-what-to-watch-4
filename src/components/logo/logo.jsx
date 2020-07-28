import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts";

const Logo = ({className}) => {
  return (
    <div className="logo">
      <Link to={AppRoute.ROOT} className={`logo__link ${className}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

export default Logo;
