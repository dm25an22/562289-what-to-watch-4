import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";

const Settings = {
  TITLE_PROMO: `The Grand Budapest Hotel`,
  GENRE_PROMO: `Drama`,
  YEAR_PROMO: 2014,
};

ReactDom.render(
    <App
      titlePromo={Settings.TITLE_PROMO}
      genrePromo={Settings.GENRE_PROMO}
      yearPromo={Settings.YEAR_PROMO}
      films={films}
    />,
    document.querySelector(`#root`)
);
