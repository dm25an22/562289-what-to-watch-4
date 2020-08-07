import React from "react";
import PropTypes from "prop-types";
import ButtonPlay from "../buttons/button-play/button-play.jsx";
import ButtonMyList from "../buttons/button-my-list/button-my-list.jsx";
import withFavorite from "../../hocks/with-favorite/with-favorite";
import {connect} from "react-redux";
import {getFavorites} from "../../reducer/data/selectors.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data";

const ButtonMyListWrraped = withFavorite(ButtonMyList);

const MovieCardDescription = ({film, children, authStatus, favoriteList, onMyListBtnClick}) => {
  const {
    title,
    genre,
    year,
  } = film;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{year}</span>
      </p>

      <div className="movie-card__buttons">
        <ButtonPlay id={film.id} />
        <ButtonMyListWrraped
          film={film}
          authStatus={authStatus}
          favoriteList={favoriteList}
          onMyListBtnClick={onMyListBtnClick}
        />
        {children}
      </div>
    </div>
  );
};

MovieCardDescription.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  children: PropTypes.node,
  favoriteList: PropTypes.array.isRequired,
  onMyListBtnClick: PropTypes.func.isRequired,
  authStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    favoriteList: getFavorites(state),
    authStatus: getAuthStatus(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMyListBtnClick(film, status) {
      dispatch(DataOperation.toggleFavorite(film, status));
    }
  };
};

export {MovieCardDescription};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardDescription);
