import React from "react";
import "../Css/adminRagistration.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="container">
        <div className="row admin-ragistration-title-row">
          <div className="Ragistration-title">Admin Registration</div>
        </div>
        <div className="row personal-information d-block mx-auto">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="first name"
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="last name"
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="email"
          />
          
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="password"
          />
          <input
            type="password"
            className="form-control mb-5"
            placeholder="confirm password"
          />
          <div className="col-12 checkbox mb-3">
            <span>
              terms and condition <input type="checkbox" className="form-check-input" />
            </span>
          </div>
          <div className="col-12 mb-3">
            <button type="submit" className="btn btn-home" disabled>
              Signup
            </button>
          </div>
          <div className="col-12 back_to_signin mb-3">
            <span>
              Already Signup !! then Back to { }
              <Link to={"/admin-login"}>Sign In</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
