import * as React from "react";
import Footer from "../footer/footer";

interface Props {
  children: React.ReactNode
}

const PageContent: React.FC<Props> = (props: Props) => {
  const {
    children
  } = props;

  return (
    <div className="page-content">
      {children}
      <Footer />
    </div>
  );
};

export default PageContent;
