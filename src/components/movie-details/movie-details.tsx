import * as React from "react";
import PageContent from "../page-content/page-content";
import MovieList from "../movie-list/movie-list";
import MovieCardFull from "../movie-card-full/movie-card-full";
import withSimilarFilms from "../../hocks/with-similar-films/with-similar-films";
import {filmType} from "../../types";

const MovieListWrraped = withSimilarFilms(MovieList);

interface Props {
  film: filmType,
  films: filmType[],
  authStatus: string
}

const MovieDetails: React.FC<Props> = ({film, films, authStatus}) => {
  scrollTo(0, 0);

  return (
    <React.Fragment>
      <MovieCardFull film={film} authStatus={authStatus}/>
      <PageContent>
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MovieListWrraped
            films={films}
            id={film.id}
            genre={film.genre}
          />
        </section>
      </PageContent>
    </React.Fragment>
  );
};

export default MovieDetails;
