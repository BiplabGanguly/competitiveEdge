import React from "react";
import { Link } from "react-router-dom";
import "../Css/StudentLogin.css";
import studentloginimage from "../Public/Student_Login_Image.png";

function StudentLogin() {
  const handleLoginFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="container Student-Login-Container">
      <div className="row login_row">
        <div className="col-lg-6 login_form">
          <div className="row">
            <form onSubmit={handleLoginFormSubmit}>
              <div className="col-md-12 stdLogin_Title">Student login</div>
              <hr />
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control input_box"
                  placeholder="email"
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control input_box"
                  placeholder="username"
                  required
                />
              </div>
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control input_box"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-home">
                  Signin
                </button>
              </div>
              <div className="col-md-12 signup-text-login">
                Don't have an account yet?{" "}
                <Link to="/studentRegistration">Sign up now</Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="login-col-img">
            <img
              src={studentloginimage}
              alt="student login"
              className="img-adminlogin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
