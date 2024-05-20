import React from "react";
import { Link } from "react-router-dom";
import "../Css/navStyle.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div className="navbar-brand" href="#">
                    Competitive Edge
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="institute"><div className="nav-link">Home</div></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="institute"><div className="nav-link">About</div></Link>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link">Our team</div>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin-login" className="institute"><div className="nav-link">Admin</div></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
