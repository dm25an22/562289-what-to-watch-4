import React from "react";
import PropTypes from "prop-types";
import Genre from "../genre/genre.jsx";

export default class GenresList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentGenre: 0
    };

    this.setCurrentGenre = this.setCurrentGenre.bind(this);
  }

  setCurrentGenre(index) {
    this.setState({currentGenre: index});
  }

  render() {
    const {genres, onGenreClick, films} = this.props;

    return (
      <ul className="catalog__genres-list">
        {genres.map((it, i) => <Genre
          key={it}
          films={films}
          index={i}
          active={this.state.currentGenre === i}
          setCurrentGenre={this.setCurrentGenre}
          onGenreClick={onGenreClick}
          genre={it} />)}
      </ul>
    );
  }
}

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onGenreClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};
