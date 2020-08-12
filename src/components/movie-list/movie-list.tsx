import * as React from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card";
import withSmallVideoPlayer from "../../hocks/with-small-video-player/with-small-video-player";
import {filmType} from "../../types";

interface Props {
  filmsByFilter: filmType[],
  children?: React.ReactNode,
}

const SmallMovieCardWrraped = withSmallVideoPlayer(SmallMovieCard);

const MovieList: React.FC<Props> = ({filmsByFilter, children}) => {
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {filmsByFilter.map((film) => {
          return (
            <SmallMovieCardWrraped
              key={film.title}
              film={film}
            />
          );
        })}
      </div>

      {children}

    </React.Fragment>
  );
};

export default MovieList;
