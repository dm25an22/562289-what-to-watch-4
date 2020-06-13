import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = ({titlePromo, genrePromo, yearPromo, filmList}) => {
  return (
    <Main
      titlePromo={titlePromo}
      genrePromo={genrePromo}
      yearPromo={yearPromo}
      filmList={filmList}
    />
  );
};

App.propTypes = {
  titlePromo: PropTypes.string.isRequired,
  genrePromo: PropTypes.string.isRequired,
  yearPromo: PropTypes.number.isRequired,
  filmList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default App;
