import * as React from "react";
import MovieNav from "../movie-nav/movie-nav";
import {filmType} from "../../types";

interface Props {
  film: filmType,
  renderCurrentInfo: (film: filmType) => React.ReactNode
  currentTab: string
  onClickTab: () => void
}

const MovieCardInfo: React.FC<Props> = (props: Props) => {
  const {
    film,
    renderCurrentInfo,
    currentTab,
    onClickTab
  } = props;

  return (
    <div className="movie-card__desc">
      <MovieNav
        currentTab={currentTab}
        onClickTab={onClickTab}
      />
      {renderCurrentInfo(film)}

    </div>
  );
};

export default MovieCardInfo;
