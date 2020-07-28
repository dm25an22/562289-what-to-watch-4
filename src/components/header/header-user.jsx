import React from "react";
import Header from "./header.jsx";

const HeaderUser = (props) => {
  const className = `user-page__head`;
  delete props.className;

  return (
    <Header className={className} {...props}>
      <h1 className="page-title user-page__title">My list</h1>
    </Header>
  );
};

export default HeaderUser;
