import React from "react";
import { Link } from "react-router-dom";
import "../CSSfolder/instituteStyle.css";


function Institute() {
  return (
    <>
      <div className="container maincon">
        <div className="row">
          <div className="col-md-6">
            <div className="adminsection">
              <Link to="/admin-login">Admin</Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="adminsection">Faculty</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Institute;
