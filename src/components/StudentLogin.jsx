import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/StudentLogin.css";
import studentloginimage from "../Public/Student_Login_Image.png";

function AdminLoginForm(event) {
  event.preventDefault();
  // Add your form submission logic here
}

function StudentLogin() {
  const [email, setEmail] = useState("example@gmail.com");
  const [username, setUsername] = useState("eample123");
  const [password, setPassword] = useState("Example@11");

  const navigate = useNavigate();

  const StudentLoginForm = async (event) => {
    event.preventDefault();


  }

  return (
    <div className="container student-form-login-container">
    <div className="row">
      <div className="login-title">Login</div>
    </div>

    <div className="row login_row">
      <div className="col-lg-6 login_form">
        <div className="row">
          <form onSubmit={StudentLoginForm}>
            <div className="col-md-12 login-form-title">Student Login</div>
            <hr></hr>
            <div className="col-md-12">
              <input
                type="email"
                className="form-control input-box"
                placeholder="example@gmail.com,"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <input
                type="text"
                className="form-control input-box"
                placeholder="eample123,"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <input
                type="password"
                className="form-control input-box"
                placeholder="Example@11"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-md-12">
              <button type="submit" className="btn btn-home">
                Signin
              </button>
            </div>
            <div className="col-md-12 signup-text-login">
              Don't have an account yet?{" "}
              <Link to="/studentRegistration"> Sign up now </Link>
            </div>
          </form>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="login-col-img">
          <img
            src={studentloginimage}
            alt="adminlogin"
            className="img-adminlogin"
          />
        </div>
      </div>
      
    </div>
  </div>
  );
}

export default StudentLogin;
