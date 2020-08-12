import * as React from "react";
import Footer from "../footer/footer";

interface Props {
  children?: React.ReactNode
}

const PageContent: React.FC<Props> = ({children}) => {
  return (
    <div className="page-content">
      {children}
      <Footer />
    </div>
  );
};

export default PageContent;
