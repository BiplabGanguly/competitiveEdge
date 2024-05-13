import React from "react";
import "../Css/AdminBranchStyle.css";
import AdminBranchInformation from "../components/AdminBranchInformation";

function AdminBranch() {
  return (

    <div className="BranchDiv">
      <div className="row">
        <div className="col-md-4">
          <AdminBranchInformation branches="Branch 1" />
        </div>

        <div className="col-md-4">
          <AdminBranchInformation branches="Branch 2" />
        </div>

        <div className="col-md-4">
          <AdminBranchInformation branches="Branch 3" />
        </div>
        
      </div>
    </div>
  );
}

export default AdminBranch;
