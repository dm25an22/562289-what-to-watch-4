import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`MainComponent`, () => {
  it(`Should click on Title`, () => {
    const onTitleFilmClick = jest.fn();

    const main = shallow(
        <Main
          titlePromo={`The Grand Budapest Hotel`}
          genrePromo={`Drama`}
          yearPromo={2014}
          filmList={[`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]}
          onTitleFilmClick={onTitleFilmClick}
        />
    );

    const titleFilm = main.find(`a.small-movie-card__link`);
    titleFilm.forEach((it) => it.simulate(`click`));

    expect(onTitleFilmClick).toHaveBeenCalledTimes(3);
  });
});
