import * as React from "react";
import Footer from "../footer/footer";
import MovieList from "../movie-list/movie-list";
import {connect} from "react-redux";
import {getFavorites} from "../../reducer/data/selectors";
import HeaderUser from "../header/header-user";
import {filmType} from "../../types";

interface Props {
  favorites: filmType[],
}

const MyList:React.FC<Props> = ({favorites: films}) => {
  return (
    <div className="user-page">
      <HeaderUser />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MovieList
          filmsByFilter={films}
        />
      </section>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: getFavorites(state)
  };
};

export {MyList};
export default connect(mapStateToProps)(MyList);
