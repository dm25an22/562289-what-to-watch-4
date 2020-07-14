import {getDescriptionRating} from "../utils";

const getAdaptedData = (film) => {
  return {
    id: film.id,
    title: film.name,
    moviePoster: film.poster_image,
    bigPoster: film.background_image,
    smallCardImg: film.preview_image,
    genre: film.genre,
    year: film.released,
    description: film.description,
    preview: film.preview_video_link,
    rating: film.rating,
    descriptionRating: getDescriptionRating(film.rating),
    quantityVotes: film.scores_count,
    producer: film.director,
    listActors: film.starring,
    runTime: film.run_time,
    videoLink: film.video_link,
    isFavorite: film.is_favorite,
    backgroundColor: film.background_color
  };
};

export {getAdaptedData};
