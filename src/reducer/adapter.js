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

// const filmToRAW = (film) => {
//   return {
//     "id": film.id,
//     "name": film.title,
//     "poster_image": film.moviePoster,
//     "background_image": film.bigPoster,
//     "preview_image": film.smallCardImg,
//     "genre": film.genre,
//     "released": film.year,
//     "description": film.description,
//     "preview_video_link": film.preview,
//     "rating": film.rating,
//     "scores_count": film.quantityVotes,
//     "director": film.producer,
//     "starring": film.listActors,
//     "run_time": film.runTime,
//     "video_link": film.videoLink,
//     "is_favorite": film.isFavorite,
//     "background_color": film.backgroundColor
//   };
// };

export {getAdaptedFilm, getAdaptedComment};
