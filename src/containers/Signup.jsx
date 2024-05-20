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
          <div className="title-personal-information mb-3">
            Personal Information
          </div>
          <hr></hr>
          <select className="form-select mb-3">
            <option selected>Title</option>
            <option value="">MR.</option>
            <option value="">MS.</option>
            <option value="">MRS.</option>
          </select>
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
            placeholder="mobile number"
          />
          <input type="date" className="form-control mb-3" placeholder="DOB" />
          <select className="form-select mb-5 form-control">
            <option selected>select gender</option>
            <option value="">male</option>
            <option value="">female</option>
            <option value="">other</option>
          </select>
        </div>

        <div className="row additional-information d-block mx-auto">
          <div className="title-additional-information mb-3">
            Additional Information
          </div>
          <hr></hr>
          <textarea
            className="form-control mb-3"
            placeholder="address"
            rows={3}
          ></textarea>
          <input type="text" className="form-control mb-3" placeholder="city" />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="pin code"
          />
          <input
            type="text"
            className="form-control mb-3"
            placeholder="state"
          />
          <input
            type="text"
            className="form-control mb-5"
            placeholder="country"
          />
        </div>

        <div className="row identity-proof d-block mx-auto">
          <div className="title-identity-proof mb-3">Identity-Proof</div>
          <hr></hr>
          <select className="form-select form-control mb-3">
            <option selected>select your Identity</option>
            <option value="">Addhar Card</option>
            <option value="">Pan Card</option>
            <option value="">Voter Card</option>
            <option value="">Driving Licence</option>
          </select>
          <div className="row mb-5">
            
            <input type="text" className="form-control mb-3" placeholder="Identity number"/>
            
          </div>
        </div>
        <div className="row login-credentials d-block mx-auto">
          <div className="title-login-credentials mb-3">Login-Credentials</div>
          <hr></hr>
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
        </div>

        <div className="row terms_conditions d-block mx-auto">
          <hr></hr>
          <div className="col-12 checkbox mb-3">
            <span>
              terms and condition <input type="checkbox" />
            </span>
          </div>
          <div className="col-12 mb-3">
            <button type="submit" className="btn btn-home" disabled>
              Signup
            </button>
          </div>
          <div className="col-12 back_to_signin mb-3">
            <span>
              Already Signup !! then Back to {}
              <Link to={"/admin-login"}>Sign In</Link>
            </span>
          </div>
          <Link to={"/admin/dashboard"}>Admin dashboard</Link>
        </div>
      </div>
    </>
  );
}

export default Signup;
