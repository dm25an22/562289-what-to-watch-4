import {reducer, ActionType, Operation} from "./data";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {mockfilms, mockPromo, mockFilms} from "../../mocks/mock-for-tests";
import {getAdaptedFilm} from "../../adapter";

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

const commentMock = [{
  "id": 1,
  "user": {
    "id": 4,
    "name": `Kate Muir`
  },
  "rating": 8.9,
  "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  "date": `2019-05-08T14:13:56.569Z`
}];

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

it(`Reducer with type LOAD_COMMENTS should return payload `, () => {
  expect(reducer({
    comments: null
  }, {
    type: ActionType.LOAD_COMMENTS,
    payload: mockPromo
  })).toEqual({
    comments: mockPromo,
  });
});

it(`Reducer with type LOAD_FILMS should return payload `, () => {
  expect(reducer({
    films: null,
  }, {
    type: ActionType.LOAD_FILMS,
    payload: commentMock
  })).toEqual({
    films: commentMock,
  });
});

describe(`Operation work correctly with adapter`, () => {
  it(`Should make a correct API call to /films `, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadFilm();

    apiMock
      .onGet(`/films`)
      .reply(200, [mockData]);

    return filmsLoader(dispatch, () => {}, api)
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
    const promoLoader = Operation.loadPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, mockData);

    return promoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO,
          payload: mockResponse,
        });
      });
  });
});

it(`Should make a correct API call to /comments/id get current comments`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const id = 1;
  const onSuccess = jest.fn();
  const onError = jest.fn();

  const commentsLoader = Operation.loadComments(1, onSuccess, onError);

  apiMock
    .onGet(`/comments/${id}`)
    .reply(200, commentMock);

  return commentsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_COMMENTS,
        payload: commentMock,
      });
      expect(onSuccess).toHaveBeenCalledTimes(1);
    });
});

it(`Should make a correct API call to /comments/id  add New Comment`, function () {
  const apiMock = new MockAdapter(api);
  const onSuccess = jest.fn();
  const onError = jest.fn();
  const newComment = {
    rating: 4,
    comment: `Something`
  };
  const dispatch = jest.fn();
  const id = 1;
  const addNewComment = Operation.addNewComment(id, newComment, onSuccess, onError);

  apiMock
    .onPost(`/comments/${id}`)
    .reply(200, []);

  return addNewComment(dispatch, () => {}, api)
    .then(() => {
      expect(onSuccess).toHaveBeenCalledTimes(1);
    });
});

it(`Should make a correct API call to /comments/id  add New Comment`, function () {
  const apiMock = new MockAdapter(api);
  const onSuccess = jest.fn();
  const onError = jest.fn();
  const newComment = {
    rating: 4,
    comment: `Something`
  };
  const dispatch = jest.fn();
  const id = 1;
  const addNewComment = Operation.addNewComment(id, newComment, onSuccess, onError);

  apiMock
    .onPost(`/comments/${id}`)
    .reply(200, []);

  return addNewComment(dispatch, () => {}, api)
    .then(() => {
      expect(onSuccess).toHaveBeenCalledTimes(1);
    });
});

it(`Should make a correct API call to /favorite `, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const favoritesLoader = Operation.loadFavorites();

  apiMock
    .onGet(`/favorite`)
    .reply(200, []);

  return favoritesLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FAVORITES,
        payload: [],
      });
    });
});


it(`Should make a correct API call to /favorite/film_id/status add item`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const toggleFavorite = Operation.toggleFavorite(mockFilms[0], 1);

  apiMock
    .onPost(`/favorite/${mockFilms[0].id}/1`)
    .reply(200, mockFilms[0]);

  return toggleFavorite(dispatch, () => {}, api)
    .then(() => {
      const adaptedData = getAdaptedFilm(mockFilms[0]);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.ADD_TO_FAVORITES,
        payload: adaptedData,
      });
    });
});

it(`Should make a correct API call to /favorite/film_id/status remove item`, function () {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const toggleFavorite = Operation.toggleFavorite(mockFilms[0], 0);

  apiMock
    .onPost(`/favorite/${mockFilms[0].id}/0`)
    .reply(200, mockFilms[0]);

  return toggleFavorite(dispatch, () => {}, api)
    .then(() => {
      const adaptedData = getAdaptedFilm(mockFilms[0]);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REMOVE_FROM_FAVORITES,
        payload: adaptedData,
      });
    });
});
