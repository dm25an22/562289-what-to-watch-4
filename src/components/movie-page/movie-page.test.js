import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const mockFilm = {
  title: `Title`,
  moviePoster: `img/the-grand-budapest-hotel-poster.jpg`,
  bigPoster: `img/the-grand-budapest-hotel-poster.jpg`,
  src: `img/the-grand-budapest-hotel-poster.jpg`,
  genre: `Drama`,
  year: 2011,
  description: `Something`,
  rating: 4.7,
  descriptionRating: `Normal`,
  quantityVotes: 125,
  producer: `Tom Ruegger`,
  listActors: [`one`, `two`]
};

it(`Render MoviePage`, () => {
  const tree = renderer.create(
      <MoviePage
        film={mockFilm}
      />
  );

  expect(tree).toMatchSnapshot();
});
