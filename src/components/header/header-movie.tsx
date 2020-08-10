import * as React from "react";
import Header from "./header";

interface Props {
  className?: string
}

const HeaderMovie: React.FC<Props> = (props: Props) => {
  const className = `movie-card__head`;
  delete props.className;

  return (
    <Header className={className} {...props}/>
  );
};

export default HeaderMovie;
