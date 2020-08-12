import * as React from "react";
import Genre from "../genre/genre";

interface Props {
  onGenreClick: () => void,
  currentGenre: string,
  genres: string[]
}

const GenresList: React.FC<Props> = ({onGenreClick, currentGenre, genres}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((it) => <Genre
        key={it}
        active={it === currentGenre}
        onGenreClick={onGenreClick}
        genre={it} />)}
    </ul>
  );
};

export default GenresList;
