import React from "react";
import PropTypes from "prop-types";
import Promo from "../promo/promo.jsx";
import PageContent from "../page-content/page-content.jsx";
import Catalog from "../catalog/catalog.jsx";
import withCurrentGenre from "../../hocks/with-current-genre/with-current-genre";

const CatalogWrraped = withCurrentGenre(Catalog);

const Main = ({promoFilm, films, genres}) => {
  scrollTo(0, 0);

  return (
    <React.Fragment>
      <Promo film={promoFilm} />
      <PageContent>
        <CatalogWrraped
          films={films}
          genres={genres}
        />
      </PageContent>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Main;
