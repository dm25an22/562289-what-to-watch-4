import React from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";
import MovieList from "../movie-list/movie-list.jsx";
import {connect} from "react-redux";
import {getFavorites} from "../../reducer/data/selectors.js";
// import {Operation as DaraOperation} from "../../reducer/data/data.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../consts.js";

class MyList extends React.PureComponent {

  // componentDidMount() {
  //   this.props.loadFavorites();
  // }

  render() {
    const films = this.props.favorites;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Link to={AppRoute.ROOT} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

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
  // loadFavorites: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    favorites: getFavorites(state)
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadFavorites() {
//       dispatch(DaraOperation.loadFavorites());
//     }
//   };
// };

export default connect(mapStateToProps)(MyList);
