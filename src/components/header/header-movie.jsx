import React from "react";
import Header from "./header.jsx";

const HeaderMovie = (props) => {
  const className = `movie-card__head`;
  delete props.className;

  return (
    <Header className={className} {...props}/>
  );
};

export default HeaderMovie;
