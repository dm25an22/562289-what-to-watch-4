import React from "react";
import PropTypes from "prop-types";
import Genre from "../genre/genre.jsx";
import {connect} from "react-redux";
import {getUniqueGeners} from "../../reducer/data/selectors";
import {getCurrentGenre} from "../../reducer/app-state/selectors";
import {ActionCreator} from "../../reducer/app-state/app-state";

const GenresList = ({onGenreClick, currentGenre, genres}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((it) => <Genre
        key={it}
        active={it === currentGenre}
        onGenreClick={onGenreClick}
        genre={it} />)}
    </ul>
  );
};

GenresList.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

// const mapStateToProps = (state) => {
//   return {
//     genres: getUniqueGeners(state),
//     currentGenre: getCurrentGenre(state),
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onGenreClick(genre) {
//       dispatch(ActionCreator.currentGenre(genre));
//     },
//   };
// };

// export {GenresList};
// export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
export default GenresList;
