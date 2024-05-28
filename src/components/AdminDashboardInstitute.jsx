import React from "react";

function AdminDashboardInstitute() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12"> Your Institute </div>
      </div>

      <hr></hr>

      <div className="row all-information d-block mx-auto">
        <div className="row">
          <div className="col-md-4">
            <label>Institute Name:</label>
            <input type="text " readOnly className="form-control mb-1" />
          </div>

          <div className="col-md-4">
            <label>Institute ID:</label>
            <input type="text " readOnly className="form-control mb-1" />
          </div>

          <div className="col-md-4">
            <label> Location:</label>
            <input type="text " readOnly className="form-control mb-1" />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AdminDashboardInstitute;
