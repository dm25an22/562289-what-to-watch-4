import * as React from "react";
import Logo from "./logo";

interface Props {
  className?: string
}

const LogoLight: React.FC<Props> = (props: Props) => {
  const className = `logo__link--light`;
  delete props.className;
  return (
    <Logo className={className} {...props}/>
  );
};

export default LogoLight;
