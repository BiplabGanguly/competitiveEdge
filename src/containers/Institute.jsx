import React from "react";
import { Link } from "react-router-dom";
import "../Css/instituteStyle.css";
import aboutimg from "../Public/about.png";

function Institute() {
  return (
    <>
      <div className="container maincon">
        <div className="row instituterow">
          <div className="col-md-6">
            <div className="adminsection">
              <div className="row">
                <div className="col-md-12">
                <img src={aboutimg} alt="about" className="img-fluid" />
                  <Link to="/admin-login">
                    <div className="admin">
                      <h4> Admin Login </h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="adminsection">
              <div className="row">
                <div className="col-md-12">
                <img src={aboutimg} alt="about" className="img-fluid" />
                  <Link to="/Faculty_Login">
                    <div className="faculty">
                      <h4> Faculty</h4>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Institute;
