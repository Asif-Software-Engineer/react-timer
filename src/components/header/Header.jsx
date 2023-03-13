import React from "react";

import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
          <Link to="/">Home / </Link>
          <Link to="Docs">Docs / </Link>
          <Link to="Content">Content </Link>
    </div>
  );
};

export default Header;
