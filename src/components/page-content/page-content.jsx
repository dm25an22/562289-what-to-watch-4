import React from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";

const PageContent = ({children}) => {
  return (
    <div className="page-content">
      {children}
      <Footer />
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageContent;
