import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
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
    const {titlePromo, genrePromo, yearPromo, films} = this.props;

    if (this.state.currentFilm >= 0) {
      return (
        <MoviePage
          film={this.props.films[this.state.currentFilm]}
        />);
    } else {
      return (
        <Main
          titlePromo={titlePromo}
          genrePromo={genrePromo}
          yearPromo={yearPromo}
          films={films}
          onSmallCardClick={this.clickSmallCardHandler}
        />
      );
    }

  }

}

App.propTypes = {
  titlePromo: PropTypes.string.isRequired,
  genrePromo: PropTypes.string.isRequired,
  yearPromo: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,

};

export default App;
