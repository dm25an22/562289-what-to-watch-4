import React from "react";
import PropTypes from "prop-types";

const containerStyle = {
  width: `100vw`,
  height: `100vh`,
  fontFamily: `"Arial", "Helvetica", "sans-serif"`,
  backgroundImage: `linear-gradient(-180deg,#180202 0%,#000 100%)`,
  color: `#dfcf77`,
  display: `flex`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`
};

const PageWarring = ({children}) => {
  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

PageWarring.propTypes = {
  children: PropTypes.node
};

export default PageWarring;
