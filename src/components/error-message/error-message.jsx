import React from "react";
import PropTypes from "prop-types";

const captionStyle = {
  fontSize: `60px`
};

const ErrorMessage = ({errorCode}) => {
  return (
    <React.Fragment>
      <h1 style={captionStyle}>Error loading data from server: {errorCode} </h1>
      <p style={{fontSize: `40px`}}>Try reloading the page</p>
    </React.Fragment>
  );
};

ErrorMessage.propTypes = {
  errorCode: PropTypes.number
};

export default ErrorMessage;
