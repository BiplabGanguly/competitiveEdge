import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/navStyle.css";

function Nav() {
  const admin_name = localStorage.getItem("admin_name");
  const navigate = useNavigate();

  const Signout = () => {
    navigate('/admin-login');
    localStorage.clear();
  }
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/admin/dashboard">
          Competitive Edge
        </Link>

        <div class="dropdown me-4">
          <button
            class="btn text-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {admin_name}
          </button>

          <ul class="dropdown-menu">
            <li>Profile</li>
            <li>
              <button onClick={Signout} className="btn btn-outline-light">Sign Out</button></li>
          </ul>
        </div>
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
      </div>
    </nav>
  );
}

export default Nav;
