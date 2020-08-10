import * as React from "react";

interface Props {
  genre: string,
  onGenreClick: (genre: string) => void,
  active: boolean
}

const Genre: React.FC<Props> = ({genre, onGenreClick, active}) => {
  const className = `catalog__genres-item ${active && `catalog__genres-item--active`}`;

  return (
    <li className={className}>
      <a
        onClick={(evt) => {
          evt.preventDefault();
          onGenreClick(genre);
        }}
        href="#"
        className="catalog__genres-link">{genre}</a>
    </li>
  );
};

export default Genre;
