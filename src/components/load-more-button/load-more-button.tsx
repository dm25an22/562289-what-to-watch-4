import * as React from "react";

interface Props {
  onChangeCountShowCrads: () => void
}

const LoadMoreButton: React.FC<Props> = ({onChangeCountShowCrads}) => {
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

export default LoadMoreButton;
