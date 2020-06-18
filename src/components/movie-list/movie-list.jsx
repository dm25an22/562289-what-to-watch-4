import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";


class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: -1
    };

    this.clickTitleHandler = this.clickTitleHandler.bind(this);
    this.mousOverSmallCardHandler = this.mousOverSmallCardHandler.bind(this);
  }

  render() {
    return (
      <div className="catalog__movies-list">
        <SmallMovieCard
          films={this.props.films}
          onCardMouseOver={this.mousOverSmallCardHandler}
          onTitleClick={this.clickTitleHandler}
        />
      </div>
    );
  }

  clickTitleHandler() {
    return;
  }

  mousOverSmallCardHandler(value) {
    this.setState({
      currentCard: value
    });
  }

}

MovieList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default MovieList;
