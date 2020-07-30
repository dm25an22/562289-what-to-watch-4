import React from "react";
import Logo from "../logo/logo.jsx";
import PropTypes from "prop-types";


const LogoLight = (props) => {
  const className = `logo__link--light`;
  delete props.className;
  return (
    <Logo className={className} {...props}/>
  );
};

LogoLight.propTypes = {
  className: PropTypes.string
};

export default LogoLight;
