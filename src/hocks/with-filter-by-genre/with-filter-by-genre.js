import React from 'react';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getFilmsByFilter} from "../../reducer/data/selectors";


const withFilterByGenre = (Component) => {
  class WithFilterByGenre extends React.PureComponent {
    constructor(props) {
      super(props);


      this.state = {
        prevCount: 8,
        films: this.props.filmsByFilter
      };

      this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
      this.setState({films: this.state.films.slice(0, 8)});
    }

    changeState() {
      const newFilms = this.props.filmsByFilter.slice(0, this.state.prevCount + 8);
      this.setState({films: newFilms});
      this.setState({prevCount: newFilms.length});
    }

    render() {
      return (
        <Component
          {...this.props}
          filmsByFilter={this.state.films}
          changeState={this.changeState}
        />
      );
    }
  }

  WithFilterByGenre.propTypes = {
    filmsByFilter: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  const mapStateToProps = (state) => {
    return {
      filmsByFilter: getFilmsByFilter(state),
    };
  };

  return connect(mapStateToProps)(WithFilterByGenre);
};

export default withFilterByGenre;
