import * as React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../enum";

interface Props {
  id: number
}

const ButtonAddReview: React.FC<Props> = ({id}) => {
  return (
    <Link to={`${AppRoute.FILM}/${id}${AppRoute.ADD_REVIEW}`} className="btn movie-card__button">Add review</Link>
  );
};

export default ButtonAddReview;
