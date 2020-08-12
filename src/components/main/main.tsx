import * as React from "react";
import Promo from "../promo/promo";
import PageContent from "../page-content/page-content";
import Catalog from "../catalog/catalog";
import withCurrentGenre from "../../hocks/with-current-genre/with-current-genre";
import {filmType} from "../../types";

const CatalogWrraped = withCurrentGenre(Catalog);

interface Props {
  promoFilm: filmType,
  films: filmType[],
  genres: string[]
}

const Main: React.FC<Props> = ({promoFilm, films, genres}) => {
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

export default Main;
