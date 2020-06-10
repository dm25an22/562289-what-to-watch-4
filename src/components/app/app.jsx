import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {titlePromo, genrePromo, yearPromo} = props;
  return (
    <Main
      titlePromo={titlePromo}
      genrePromo={genrePromo}
      yearPromo={yearPromo}
    />
  );
};

export default App;
