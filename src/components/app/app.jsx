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
    const {promo, films, currentGenre, onGenreClick} = this.props;

    if (this.state.currentFilm >= 0) {
      return (
        <MoviePage
          film={this.props.films[this.state.currentFilm]}
        />);
    } else {
      return (
        <Main
          currentGenre={currentGenre}
          promo={promo}
          films={films}
          onGenreClick={onGenreClick}
          onSmallCardClick={this.clickSmallCardHandler}
        />
      );
    }

  }

}

App.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  promo: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onGenreClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    promo: state.promo,
    films: state.films,
    currentGenre: state.currentGenre
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreClick(genre) {
      dispatch(ActionCreator.currentGenre(genre));
    }
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
