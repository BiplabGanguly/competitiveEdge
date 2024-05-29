import React from "react";

function AdminDashbordProfile() {
  return (
    <div className="container">
      <div className="row">
        <div className="col=md-12 Myprofile"> My Profile </div>
      </div>

      <hr></hr>

      <div className="row all-information d-block mx-auto">
        <div className="row">
          <div className="col-md-4">
            <label>Name:</label>
            <input type="text " readOnly className="form-control mb-1" />
          </div>

          <div className="col-md-4">
            <label>Email:</label>
            <input type="text " readOnly className="form-control mb-1" />
          </div>

          <div className="col-md-4">
            <label>Mobile:</label>
            <input type="number" readOnly className="form-control mb-1" />
          </div>

          <div className="col-md-4">
            <label>Address:</label>
            <input type="text" readOnly className="form-control mb-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashbordProfile;
