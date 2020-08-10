import * as React from "react";

const captionStyle: React.CSSProperties = {
  fontSize: `60px`
};

interface Props {
  errorCode: number
}

const ErrorMessage: React.FC<Props> = ({errorCode}) => {
  return (
    <React.Fragment>
      <h1 style={captionStyle}>Error loading data from server: {errorCode} </h1>
      <p style={{fontSize: `40px`}}>Try reloading the page</p>
    </React.Fragment>
  );
};

export default ErrorMessage;
