import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";


const App = ({titlePromo, genrePromo, yearPromo, films}) => {
  return (
    <Main
      titlePromo={titlePromo}
      genrePromo={genrePromo}
      yearPromo={yearPromo}
      films={films}
    />
  );
};

App.propTypes = {
  titlePromo: PropTypes.string.isRequired,
  genrePromo: PropTypes.string.isRequired,
  yearPromo: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default App;
