import React from "react";
import { Link } from "react-router-dom";
import "../Css/navStyle.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Competitive Edge
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div class="dropdown me-4">
          <button
            class="btn text-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Bapan Dutta
          </button>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Profile
              </a>
            </li>

            <li>
              <a class="dropdown-item" href="#">
                Institute
              </a>
            </li>

            <li>
              <a class="dropdown-item" href="#">
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
