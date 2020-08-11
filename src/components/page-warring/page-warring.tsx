import * as React from "react";

const containerStyle: React.CSSProperties = {
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

interface Props {
  children?: React.ReactNode
}

const PageWarring: React.FC<Props> = ({children}) => {
  return (
    <div style={containerStyle}>
      {children}
    </div>
  );
};

export default PageWarring;
