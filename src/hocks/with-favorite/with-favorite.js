import React from "react";
import PropTepes from "prop-types";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data";
import {getFavorites} from "../../reducer/data/selectors";
import {getAuthStatus} from "../../reducer/user/selectors";


const withFavorite = (Component) => {
  class WithFavorite extends React.PureComponent {
    _checkFilmInFavorite() {
      const {favoriteList, film} = this.props;
      const isFavorite = Boolean(favoriteList.find((it) => it.id === film.id));
      return isFavorite ? 0 : 1;
    }

    render() {
      const {
        onMyListBtnClick
      } = this.props;

      return (
        <Component
          {...this.props}
          status={this._checkFilmInFavorite()}
          onMyListBtnClick={onMyListBtnClick}
        />
      );
    }
  }

  WithFavorite.propTypes = {
    favoriteList: PropTepes.array.isRequired,
    film: PropTepes.object.isRequired,
    onMyListBtnClick: PropTepes.func.isRequired
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

  return connect(mapStateToProps, mapDispatchToProps)(WithFavorite);
};


export default withFavorite;
