import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer";
class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentFilm: -1
    };

    this.clickSmallCardHandler = this.clickSmallCardHandler.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-film-page">
            <MoviePage
              film={this.props.films[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  clickSmallCardHandler(index) {
    return this.setState({currentFilm: index});
  }

  _renderApp() {
    const {promo, films, genres, onGenreClick} = this.props;

    if (this.state.currentFilm >= 0) {
      return (
        <MoviePage
          film={this.props.films[this.state.currentFilm]}
        />);
    } else {
      return (
        <Main
          promo={promo}
          films={films}
          onGenreClick={onGenreClick}
          genres={genres}
          onSmallCardClick={this.clickSmallCardHandler}
        />
      );
    }

  }

}

App.propTypes = {
  promo: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onGenreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    promo: state.promo,
    genres: state.genres,
    films: state.films
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreClick(films, genre) {
      dispatch(ActionCreator.filterByGenre(films, genre));
    }
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
