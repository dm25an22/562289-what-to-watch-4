import * as React from "react";
import LogoLight from "../logo/logo-light";

const Footer: React.FC = () => {
  return (
    <footer className="page-footer">
      <LogoLight />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
