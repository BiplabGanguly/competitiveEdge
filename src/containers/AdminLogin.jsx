import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/loginStyle.css";
import adminloginimg from "../Public/adminLogin.jpg"

function AdminLogin() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="login-col-img">
            <img src={adminloginimg} alt="adminlogin" className="img-adminlogin" />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="row admin-login-title-row">
          <div className='login-title'>Login</div>
        </div>
        <div className='row'>
          <form method='post'>
            <div className="col-md-12 emailc">
              <input type="email" className='form-control' placeholder='email' />
            </div>
            <div className="col-md-12 usernamec">
              <input type='text' className='form-control' placeholder='username' />
            </div>
            <div className="col-md-12 passwordc">
              <input type="password" className='form-control' placeholder='Password' />
            </div>
            <div className='col-lg-6 checkboxc'>
              remember me <input type='checkbox' />
            </div>
            <div className="col-lg-6 loginc">
            <button type='submit' className='btn btn-home'>Login</button>
            </div>
            <div className="col-lg-6 signupc">
            <Link to="/signup">Signup</Link>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default AdminLogin
