import React from "react";
import Header from "./header.jsx";
import PropTypes from "prop-types";


const HeaderMovie = (props) => {
  const className = `movie-card__head`;
  delete props.className;

  return (
    <Header className={className} {...props}/>
  );
};

HeaderMovie.propTypes = {
  className: PropTypes.string
};

export default HeaderMovie;
