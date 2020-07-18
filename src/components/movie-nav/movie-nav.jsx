import React from "react";
import {TabName} from "../../consts";

const MovieNav = ({currentTab, clickOnTab}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(TabName).map((it) => {
          return (
            <li key={it} className={`movie-nav__item ${currentTab === it && `movie-nav__item--active`}`}>
              <a onClick={(evt) => {
                evt.preventDefault();

                clickOnTab(it);
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

export default MovieNav;
