import React from "react";
import {shallow} from "enzyme";
import LoadMoreButton from "./load-more-button.jsx";

it(`check click on button`, () => {
  const clickOnButton = jest.fn();
  const tree = shallow(
      <LoadMoreButton
        changeCountShowCrads={clickOnButton}
      />
  );

  const buttton = tree.find(`button`);
  buttton.simulate(`click`);

  expect(clickOnButton).toBeCalledTimes(1);
});
