import React, { useState, useEffect } from "react";
import "../Css/AdminBranchStyle.css";
import AdminBranchInformation from "../components/AdminBranchInformation";
import { fetchAllBranchDetails } from "./FetchAdminData";

function AdminBranch() {
  const [branchData, setBranchData] = useState([]);
  console.log(branchData)
  // Optionally, you can fetch branch data from an API here using useEffect
  useEffect(() => {
    fetchAllBranchDetails(setBranchData);
  }, []);

  return (
    <div className="BranchDiv">
      <div className="row">
        {
          branchData.map((branch, index) => (
            <div className="col-md-4" key={index}>
              <AdminBranchInformation branches={branch.branch_name} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default AdminBranch;
