import {reducer, ActionType} from "./reducer";
import {films} from "./mocks/films";

const promo = {
  titlePromo: `The Grand Budapest Hotel`,
  genrePromo: `Drama`,
  yearPromo: 2014,
};

it(`Reducer with type CURRENT_GENRE should return payload `, () => {
  expect(reducer({
    films,
    currentGenre: `All genre`,
    promo
  }, {
    type: ActionType.CURRENT_GENRE,
    payload: `Thrillers`
  })).toEqual({
    films,
    currentGenre: `Thrillers`,
    promo
  });
});
