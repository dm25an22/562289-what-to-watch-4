import React from "react";

const LoadMoreButton = ({changeState}) => {
  return (
    <div className="catalog__more">
      <button onClick={() => {
        changeState();
      }}
      className="catalog__button"
      type="button">Show more</button>
    </div>
  );
};

export default LoadMoreButton;
