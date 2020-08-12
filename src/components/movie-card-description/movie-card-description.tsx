import * as React from "react";
import ButtonPlay from "../buttons/button-play/button-play";
import ButtonMyList from "../buttons/button-my-list/button-my-list";
import withFavorite from "../../hocks/with-favorite/with-favorite";
import {connect} from "react-redux";
import {getFavorites} from "../../reducer/data/selectors.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data";
import {filmType} from "../../types";

const ButtonMyListWrraped = withFavorite(ButtonMyList);

interface Props {
  film: filmType,
  children?: React.ReactNode,
  favoriteList: filmType[]
  onMyListBtnClick: () => void,
  authStatus: string
}

const MovieCardDescription: React.FC<Props> = (props: Props) => {
  const {
    film: {
      title,
      genre,
      year,
      id
    },
    film,
    children,
    authStatus,
    favoriteList,
    onMyListBtnClick
  } = props;

  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{title}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{year}</span>
      </p>

      <div className="movie-card__buttons">
        <ButtonPlay id={id} />
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
