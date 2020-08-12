import * as React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../enum";

interface Props {
  id: number
}

const ButtonPlay: React.FC<Props> = ({id}) => {
  return (
    <Link to={`${AppRoute.PLAYER}/${id}`} className="btn btn--play movie-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </Link>
  );
};

export default ButtonPlay;
