import React from "react";
import PropTypes from "prop-types";
import Footer from "../footer/footer.jsx";


const PageContent = ({children}) => {
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        {children}
      </section>

      <Footer />
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageContent;
