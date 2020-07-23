import React from "react";
import PropTypes from "prop-types";
import Promo from "../promo/promo.jsx";
import PageContent from "../page-content/page-content.jsx";
import Catalog from "../catalog/catalog.jsx";
import withCurrentGenre from "../../hocks/with-current-genre/with-current-genre";

const CatalogWrraped = withCurrentGenre(Catalog);

const Main = ({promoFilm, onSmallCardClick}) => {
  return (
    <>
    <Promo promoFilm={promoFilm} />

    <PageContent>
      <CatalogWrraped
        onSmallCardClick={onSmallCardClick}
      />
    </PageContent>
  </>
  );
};

Main.propTypes = {
  promoFilm: PropTypes.object.isRequired,
  onSmallCardClick: PropTypes.func.isRequired
};

export default Main;
