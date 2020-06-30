const ALL_GENRE = `All genre`;
const MAX_GENRES = 9;


const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const getUniqueGenres = (movies) => {
  const genresUnique = [...new Set(movies.map((it) => it.genre))].sort();

  return [ALL_GENRE].concat(checkLengthGenres(genresUnique));
};

const checkLengthGenres = (genres) => {
  if (genres.length > MAX_GENRES) {
    return genres.slice(0, MAX_GENRES);
  }

  return genres;
};

const filterByGenre = (filmsList, genre) => {
  if (genre === ALL_GENRE) {
    return filmsList;
  } else {
    return filmsList.filter((it) => it.genre === genre);
  }
};


export {extend, getUniqueGenres, ALL_GENRE, filterByGenre};
