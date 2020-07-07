import {reducer, ActionType} from "./reducer";
it(`Reducer with type CURRENT_GENRE should return payload `, () => {
  expect(reducer({
    currentGenre: `All genre`,
  }, {
    type: ActionType.CURRENT_GENRE,
    payload: `Thrillers`
  })).toEqual({
    currentGenre: `Thrillers`,
  });
});

it(`Reducer with type CURRENT_FILM should return payload `, () => {
  expect(reducer({
    currentFilm: -1,
  }, {
    type: ActionType.CURRENT_FILM,
    payload: 3
  })).toEqual({
    currentFilm: 3,
  });
});
