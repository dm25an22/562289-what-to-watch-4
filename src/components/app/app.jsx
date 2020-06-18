import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import MoviePage from "../movie-page/movie-page.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";


class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie-page">
            <MoviePage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {titlePromo, genrePromo, yearPromo, films} = this.props;
    return (
      <Main
        titlePromo={titlePromo}
        genrePromo={genrePromo}
        yearPromo={yearPromo}
        films={films}
      />
    );
  }

}

App.propTypes = {
  titlePromo: PropTypes.string.isRequired,
  genrePromo: PropTypes.string.isRequired,
  yearPromo: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default App;
