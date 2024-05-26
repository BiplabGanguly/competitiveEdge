import React from "react";
import "../Css/AdminBranchStyle.css";
import AdminBranchInformation from "../components/AdminBranchInformation";

function AdminBranch() {
  return (
    <div className="BranchDiv">
      <div className="row">
        <div className="col-md-4">
          <AdminBranchInformation branches="Branches" />
        </div>

        <div className="col-md-4">
          <AdminBranchInformation branches="Faculty" />
        </div>

        <div className="col-md-4">
          <AdminBranchInformation branches="Student" />
        </div>
      </div>
    </div>
  );
}

export default AdminBranch;
