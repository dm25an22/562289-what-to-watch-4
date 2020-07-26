import React from "react";
import PropsTypes from "prop-types";

const LoadMoreButton = ({changeCountShowCrads}) => {
  return (
    <div className="catalog__more">
      <button onClick={changeCountShowCrads}
        className="catalog__button"
        type="button">Show more</button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  changeCountShowCrads: PropsTypes.func.isRequired
};

export default LoadMoreButton;
