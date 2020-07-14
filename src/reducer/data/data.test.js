import {reducer, ActionType, Operation} from "./data";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {mockfilms, mockPromo} from "../../mocks/mock-for-tests";

const api = createAPI();

const mockResponse = {
  id: 1,
  title: `The Grand Budapest Hotel`,
  moviePoster: `img/the-grand-budapest-hotel-poster.jpg`,
  bigPoster: `img/the-grand-budapest-hotel-bg.jpg`,
  smallCardImg: `img/the-grand-budapest-hotel.jpg`,
  videoLink: `https://some-link`,
  genre: `Comedy`,
  year: 2014,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).`,
  preview: `https://some-link`,
  rating: 0,
  descriptionRating: `Bad`,
  quantityVotes: 240,
  producer: `Wes Andreson`,
  listActors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 90,
  isFavorite: false,
  backgroundColor: `#ffffff`
};

const mockData = {
  "id": 1,
  "name": `The Grand Budapest Hotel`,
  "poster_image": `img/the-grand-budapest-hotel-poster.jpg`,
  "preview_image": `img/the-grand-budapest-hotel.jpg`,
  "background_image": `img/the-grand-budapest-hotel-bg.jpg`,
  "background_color": `#ffffff`,
  "video_link": `https://some-link`,
  "preview_video_link": `https://some-link`,
  "description": `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes).`,
  "rating": 0,
  "scores_count": 240,
  "director": `Wes Andreson`,
  "starring": [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  "run_time": 90,
  "genre": `Comedy`,
  "released": 2014,
  "is_favorite": false
};

it(`Reducer with type LOAD_FILMS should return payload `, () => {
  expect(reducer({
    films: null,
  }, {
    type: ActionType.LOAD_FILMS,
    payload: mockfilms
  })).toEqual({
    films: mockfilms,
  });
});

it(`Reducer with type LOAD_PROMO should return payload `, () => {
  expect(reducer({
    promoFilm: null
  }, {
    type: ActionType.LOAD_PROMO,
    payload: mockPromo
  })).toEqual({
    promoFilm: mockPromo,
  });
});

describe(`Operation work correctly with adapter`, () => {
  it(`Should make a correct API call to /films `, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.loadFilm();

    apiMock
      .onGet(`/films`)
      .reply(200, [mockData]);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: [mockResponse],
        });
      });
  });

  it(`Should make a correct API call to /films/promo `, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const questionLoader = Operation.loadPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, mockData);

    return questionLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: mockResponse,
        });
      });
  });
});

