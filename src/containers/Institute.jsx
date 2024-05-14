import React from "react";
import { Link } from "react-router-dom";
import "../Css/instituteStyle.css";
import Admin_Image_in_institute_Page from "../Public/Admin_Image_in_institute_Page.jpg";
import Faculty_Image_in_institute_Page from "../Public/Faculty_Image_in_institute_Page.png";

function Institute() {
  return (
    <>
      <div className="container maincon">
        <div className="row instituterow">
          <div className="col-md-6">
            <div className="adminsection">
              <div className="row">
                <div className="col-md-12">
                  <div className="row mb-3">
                    <img
                      src={Admin_Image_in_institute_Page}
                      alt="Admin"
                      className="img-flile"
                    />
                  </div>
                  <div className="row mb-5">
                    <Link className="AdminLogin" to="/admin-login">
                      <button className="btn btn-home"> Admin </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="adminsection">
              <div className="row">
                <div className="col-md-12">
                  <div className="row mb-3">
                    <img
                      src={Faculty_Image_in_institute_Page}
                      alt="Faculty"
                      className="img-flile"
                    />
                  </div>
                  <div className="row mb-5">
                    <Link className="faculty" to="/Faculty_Login">
                      <button className="btn btn-home"> Faculty </button>
                    </Link>
                  </div>
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
