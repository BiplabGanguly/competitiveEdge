import React from "react";
import { Link } from "react-router-dom";
import "../CSSfolder/instituteStyle.css";
import Nav from "./Nav";

function Institute() {
  return (
<<<<<<< HEAD
    <div>
      <div classname="container institutecontainer">
        <div className='row'>
          <div className='col-md-6'>
            <div className='adminsection'>
              <Link to="/admin-login">admin</Link>
=======
    <>
    <Nav/>
      <div className="container maincon">
        <div className="row">
          <div className="col-md-6">
            <div className="adminsection">
              <Link to="/admin-login">Admin</Link>
>>>>>>> 375215a0808363a9455624202698fdc5048ea582
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
