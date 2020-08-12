import * as React from "react";
import {TabName} from "../../enum.js";

interface Props {
  currentTab: string,
  onClickTab: (tabName: string) => void
}

const MovieNav: React.FC<Props> = ({currentTab, onClickTab}) => {
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(TabName).map((it: string) => {
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

export default MovieNav;
