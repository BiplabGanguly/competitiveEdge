import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      {" "}
      <Link to="/institute">
        <h2>institution</h2>
      </Link>
      <div className="container" style={{ border: "1px solid black" }}>test</div>
    </div>
  );
}

export default Nav;
