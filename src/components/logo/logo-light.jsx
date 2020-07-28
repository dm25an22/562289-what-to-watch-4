import React from "react";
import Logo from "../logo/logo.jsx";

const LogoLight = (props) => {
  const className = `logo__link--light`;
  delete props.className;
  return (
    <Logo className={className} {...props}/>
  );
};

export default LogoLight;
