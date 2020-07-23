const mockFilms = [
  {
    title: `Fantastic Beasts`,
    moviePoster: `img/the-grand-budapest-hotel-poster.jpg`,
    bigPoster: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    year: 2011,
    description: `Something`,
    rating: 4.7,
    descriptionRating: `Normal`,
    quantityVotes: 125,
    producer: `Tom Ruegger`,
    listActors: [`one`, `two`],
    smallCardImg: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `red`,
    runTime: 90,
    id: 1
  },
  {
    title: `Title`,
    moviePoster: `img/the-grand-budapest-hotel-poster.jpg`,
    bigPoster: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Drama`,
    year: 2011,
    description: `Something`,
    rating: 4.7,
    descriptionRating: `Normal`,
    quantityVotes: 125,
    producer: `Tom Ruegger`,
    listActors: [`one`, `two`],
    smallCardImg: `img/bohemian-rhapsody.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `red`,
    runTime: 90,
    id: 2
  },
  {
    title: `Title2`,
    moviePoster: `img/the-grand-budapest-hotel-poster.jpg`,
    bigPoster: `img/the-grand-budapest-hotel-poster.jpg`,
    genre: `Action`,
    year: 2011,
    description: `Something`,
    rating: 4.7,
    descriptionRating: `Normal`,
    quantityVotes: 125,
    producer: `Tom Ruegger`,
    listActors: [`one`, `two`],
    smallCardImg: `img/macbeth.jpg`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    backgroundColor: `red`,
    runTime: 90,
    id: 3
  },
];

const mockPromo = {
  title: `Promo`,
  moviePoster: `film.poster_image`,
  bigPoster: `film.background_image`,
  smallCardImg: `film.preview_image`,
  genre: `film.genre`,
  year: 1998,
  description: `film.description`,
  preview: `film.preview_video_link`,
  rating: 3.2,
  descriptionRating: `Bad`,
  quantityVotes: 1290,
  producer: `film.director`,
  listActors: [`1`, `2`, `3`],
  runTime: 120,
  videoLink: `film.video_link`,
  isFavorite: true,
  backgroundColor: `red`,
  id: 4
};

export {
  mockFilms,
  mockPromo
};
