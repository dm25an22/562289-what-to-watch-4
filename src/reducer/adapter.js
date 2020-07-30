const getAdaptedFilm = (film) => {
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
    quantityVotes: film.scores_count,
    producer: film.director,
    listActors: film.starring,
    runTime: film.run_time,
    videoLink: film.video_link,
    isFavorite: film.is_favorite,
    backgroundColor: film.background_color
  };
};

const getAdaptedComment = (comment) => {
  return {
    id: comment.id,
    user: {
      id: comment.user.id,
      name: comment.user.name
    },
    rating: comment.rating,
    comment: comment.comment,
    date: comment.date
  };
};

export {getAdaptedFilm, getAdaptedComment};
