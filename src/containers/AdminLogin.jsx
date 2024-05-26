import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/loginStyle.css";
import adminloginimg from "../Public/adminLogin.jpg";
import baseURL from "../BaseURL";

function AdminLogin() {
  const [email, setEmail] = useState('john.doe@gmail.com');
  const [username, setUsername] = useState("johndoe");
  const [password, setPassword] = useState("StrongP@ssw0rd");

  const navigate = useNavigate();

  const AdminLoginFrom = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/user/admin-signin/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      localStorage.setItem("admin_name", data.admin_username);
      localStorage.setItem("admin_token", data.token);
      localStorage.setItem("admin_permission", data.admin_permission);
      localStorage.setItem("admin_profile", data.admin_profile);
      console.log('Response:', data);
      navigate('/admin/dashboard');
    } catch (error) {
      alert('There was an error!', error);
    }
  }

  return (
    <div className="container admin-login-container">
      <div className="row">
        <div className="login-title">Login</div>
      </div>

      <div className="row login_row">
        <div className="col-lg-6 login_form">
          <div className="row">
            <form onSubmit={AdminLoginFrom}>
              <div className="col-md-12 login-form-title">Admin login</div>
              <hr></hr>
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control input-box"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control input-box"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control input-box"
                  placeholder="Password"
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
