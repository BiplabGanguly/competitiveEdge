import React from "react";
import { Link } from "react-router-dom";
import "../Css/loginStyle.css";
import adminloginimg from "../Public/adminLogin.jpg";

function AdminLogin() {
  return (
    <div className="container admin-login-container">
      <div className="row">
        <div className="login-title">Login</div>
      </div>

      <div className="row login_row">
        <div className="col-lg-6 login_form">
          <div className="row">
            <form method="post">
              <div className="col-md-12 login-form-title">Admin login</div>
              <hr></hr>
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control input-box"
                  placeholder="email"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control input-box"
                  placeholder="username"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control input-box"
                  placeholder="Password"
                />
              </div>
              <div className="col-md-12 remember-me">
                <span>
                  remember me <input type="checkbox" className="from-control" />
                </span>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-home">
                  Signin
                </button>
              </div>
              <div className="col-md-12 signup-text-login">
                Don't have an account yet?{" "}
                <Link to="/signup"> Sign up now </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="login-col-img">
            <img
              src={adminloginimg}
              alt="adminlogin"
              className="img-adminlogin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
