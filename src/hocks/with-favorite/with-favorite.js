import React from "react";
import PropTepes from "prop-types";

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

  return WithFavorite;
};

export default withFavorite;
