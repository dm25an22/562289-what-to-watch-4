import React from "react";
import PropsTypes from "prop-types";

const LoadMoreButton = ({onChangeCountShowCrads}) => {
  return (
    <div className="catalog__more">
      <button onClick={() => {
        onChangeCountShowCrads();
      }}
      className="catalog__button"
      type="button">Show more</button>
    </div>
  );
};

LoadMoreButton.propTypes = {
  onChangeCountShowCrads: PropsTypes.func.isRequired
};

export default LoadMoreButton;
