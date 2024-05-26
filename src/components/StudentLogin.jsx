import React from "react";
import "../Css/StudentLogin.css";
import studentloginimage from "../Public/Student_Login_Image.png";

function StudentLogin() {
  return (
    <div className="container Student-Login-Container">
      <div className="row">
        <div className="col-md-6 stdLogin">
          <div className="row">
            <form method="post">
              <div className="col-md-12 stdLogin_Title"> Student Login</div>
              <hr></hr>

              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control input_box"
                  placeholder="E-mail"
                />
              </div>

              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control input_box"
                  placeholder="User-Id"
                />
              </div>

              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control input_box"
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
                  {" "}
                  Signin
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="login-col-img">
              <img
                src={studentloginimage}
                alt="studentlogin"
                className="img-studentlogin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
