import React from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import {connect} from "react-redux";
import {getFavorites} from "../../reducer/data/selectors.js";
import HeaderUser from "../header/header-user.jsx";

class MyList extends React.PureComponent {

  render() {
    const films = this.props.favorites;

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
  }
}

MyList.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => {
  return {
    favorites: getFavorites(state)
  };
};

export default connect(mapStateToProps)(MyList);
