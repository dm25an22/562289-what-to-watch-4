import React from "react";
import PropTypes from "prop-types";
import {TabName} from "../../hocks/with-current-tab/with-current-tab";

const MovieNav = ({currentTab, onClickTab}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(TabName).map((it) => {
          return (
            <li key={it} className={`movie-nav__item ${currentTab === it && `movie-nav__item--active`}`}>
              <a onClick={(evt) => {
                evt.preventDefault();

                onClickTab(it);
              }}
              href="#"
              className="movie-nav__link">{it}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

MovieNav.propTypes = {
  currentTab: PropTypes.string.isRequired,
  onClickTab: PropTypes.func.isRequired
};

export default MovieNav;
