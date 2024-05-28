import React from "react";
import "../Css/StudentRegistration.css";
import { Link } from "react-router-dom";
function StudentRegistration() {
  return (
    <div className="container">
      <div className="row student-Registration-Title-Row">
        <div className="Registration-Title">Student Registration</div>
      </div>

      <div className="row persolan-Information d-block mx-auto">
        <div className="personal-Information-Title mb-3">
          {" "}
          Personal Information
        </div>
      </div>
      <hr></hr>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="First name"
      />
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Last name"
      />
      <input type="text" className="form-control mb-3" placeholder="E-mail" />
      <input type="text" className="form-control mb-3" placeholder="User-Id" />
      <select className="form-select mb-3 form-control">
        <option selected> Select Branch </option>
        <option value=""> JEE </option>
        <option value=""> NEET </option>
      </select>

      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Confirm Password"
      />

      <div className="row term-comdition">
        <hr></hr>
        <div className="col-md-12 checkbox mb-3">
          <span>
            {" "}
            Term & comdition{" "}
            <input type="checkbox" className="form-check-input" />
          </span>
        </div>

        <div className="col-md-12 mb-2">
        <button type="submit" className="btn btn-home"> Signup </button>
        </div>
        
        <div className="col-md-12 back-to-signIn mb-3">
        <span>
        Already Signup !! then back to {}
        <Link to="/student"> SignIn. </Link>
        </span>
        
        </div>
      </div>
    </div>
  );
}

export default StudentRegistration;
