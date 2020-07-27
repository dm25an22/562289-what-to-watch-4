import React from "react";
import PropTypes from "prop-types";
import Promo from "../promo/promo.jsx";
import PageContent from "../page-content/page-content.jsx";
import Catalog from "../catalog/catalog.jsx";
import withCurrentGenre from "../../hocks/with-current-genre/with-current-genre";

const CatalogWrraped = withCurrentGenre(Catalog);

const Main = ({promoFilm, authStatus}) => {

  return (
    <React.Fragment>
      <Promo promoFilm={promoFilm} authStatus={authStatus} />

      <PageContent>
        <CatalogWrraped />
      </PageContent>
    </React.Fragment>
  );
};

Main.propTypes = {
  promoFilm: PropTypes.object.isRequired,
};

export default Main;
