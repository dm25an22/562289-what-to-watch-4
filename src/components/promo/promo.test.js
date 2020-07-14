import React from "react";
import renderer from "react-test-renderer";
import Promo from "./promo.jsx";

const promo = {
  id: 1,
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
  backgroundColor: `red`
};

it(`Render Promo`, () => {
  const tree = renderer.create(
      <Promo
        promoFilm={promo}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
