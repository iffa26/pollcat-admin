import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <button>All questions</button>
      </Link>
      <Link to="/newquestion">
        <button>New Question</button>
      </Link>
    </nav>
  );
};

export default NavBar;
