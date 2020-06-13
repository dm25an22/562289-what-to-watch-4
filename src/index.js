import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  TITLE_PROMO: `The Grand Budapest Hotel`,
  GENRE_PROMO: `Drama`,
  YEAR_PROMO: 2014,
  FILM_LIST: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]
};

ReactDom.render(
    <App
      titlePromo={Settings.TITLE_PROMO}
      genrePromo={Settings.GENRE_PROMO}
      yearPromo={Settings.YEAR_PROMO}
      filmList={Settings.FILM_LIST}
    />,
    document.querySelector(`#root`)
);
